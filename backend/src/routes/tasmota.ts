import express, { NextFunction, Request, Response } from 'express';
import { TasmotaDevice } from '../device.types';
import { addDevicesToStore, discoveredDevices } from '../storage';
import { tasmotaDevices } from './../storage';

export const tasmotaRouter = express.Router();

tasmotaRouter.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send(tasmotaDevices);
});

tasmotaRouter.get('/discover', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send(discoveredDevices);
});

tasmotaRouter.post('/add', (req: Request, res: Response, _next: NextFunction) => {
  const newDevices: TasmotaDevice[] = req.body;

  addDevicesToStore(newDevices);

  res.status(200).send();
});
