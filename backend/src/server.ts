import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, Response } from 'express';
import { db } from './database';

import { mqttSetup } from './mqtt';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

mqttSetup();

app.use(cors());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (_req: Request, res: Response) => {
  res.send('API for network-overview2');
});

app.get('/devices/tasmota', (req, res, next) => {
  const sql = 'select * from tasmota';
  const params: [] = [];
  db.all(sql, params, (err: Error, rows: []) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`\n⚡️[server]: Server is running at http://localhost:${port}\n`);
});
