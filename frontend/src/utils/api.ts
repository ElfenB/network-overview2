import axios from 'axios';
import { DeviceType, TileData } from '../components/common/DeviceTile.types';

const isProd = import.meta.env.PROD;

export const api = axios.create({
  baseURL: isProd ? `${import.meta.env.BASE_URL}/api` : import.meta.env.VITE_BACKEND_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: 1000,
});

export async function getTasmotaData() {
  const res = await api.get('/devices/tasmota');
  return res.data as TileData[];
}

export async function getDiscoveryData(deviceType: DeviceType) {
  const res = await api.get(`devices/${deviceType}/discover`);
  return res.data as TileData[];
}
