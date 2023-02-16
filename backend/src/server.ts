import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('API for network-overview2');
});

app.listen(port, () => {
  console.log(`\n⚡️[server]: Server is running at http://localhost:${port}\n`);
});
