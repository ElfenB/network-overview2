import express, { NextFunction, Request, Response } from 'express';
import { discoveredDevices, saveToStorage } from '../storage';

export const tasmotaRouter = express.Router();

tasmotaRouter.get('/discover', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send(discoveredDevices);
});

tasmotaRouter.post('/save-discovered', (_req: Request, res: Response, _next: NextFunction) => {
  const err = saveToStorage(discoveredDevices);
  if (err) {
    res.status(500).send(err);
  }
  res.status(200).send();
});
