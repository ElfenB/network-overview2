import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, Response } from 'express';

import { mqttSetup } from './mqtt';
import { tasmotaRouter } from './routes/tasmota';
import { tasmotaStoreInit } from './storage';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

mqttSetup();
tasmotaStoreInit();

app.use(cors());
app.use(bodyParser.json());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (_req: Request, res: Response) => {
  res.send('API for network-overview2');
});

app.use('/devices/tasmota', tasmotaRouter);

app.listen(port, () => {
  console.log(`\n⚡️[server]: Server is running at http://localhost:${port}\n`);
});
