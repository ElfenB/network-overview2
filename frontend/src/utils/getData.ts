import { DeviceType, TileData } from '../components/common/DeviceTile.types';
import { mongooseDevicesMock } from '../components/MongooseDevices.mockData';
import { mockData } from '../components/various.mockData';
import { getTasmotaData } from './api';

export async function getData(deviceType: DeviceType): Promise<TileData[]> {
  // TODO: Implement fetching the api
  switch (deviceType) {
    case 'mongoose':
      return mongooseDevicesMock;
    case 'tasmota':
      // return tasmotaDevicesMock;
      return await getTasmotaData();
    case 'system':
      return mockData;
    case 'other':
      return mockData;

    default:
      return [];
  }
}
