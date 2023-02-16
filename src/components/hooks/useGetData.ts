import { DeviceType, TileData } from '../common/DeviceTile.types';
import { mongooseDevicesMock } from '../MongooseDevices.mockData';
import { tasmotaDevicesMock } from '../TasmotaDevices.mockData';
import { mockData } from '../various.mockData';

export function useGetData(deviceType: DeviceType): TileData[] {
  // TODO: Implement fetching the api
  switch (deviceType) {
    case 'mongoose':
      return mongooseDevicesMock;
    case 'tasmota':
      return tasmotaDevicesMock;
    case 'system':
      return mockData;
    case 'other':
      return mockData;

    default:
      return [];
  }
}
