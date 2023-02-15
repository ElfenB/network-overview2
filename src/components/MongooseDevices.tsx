import { Typography } from '@mui/material';
import { DeviceList } from './common/DeviceList';
import { TileData } from './common/DeviceTile.types';
import { mongooseDevicesMock } from './MongooseDevices.mockData';

export function MongooseDevices() {
  const devices: TileData[] = mongooseDevicesMock;

  return (
    <>
      <Typography variant="h4">Mongoose Devices</Typography>
      <DeviceList devices={devices} />
      <hr />
    </>
  );
}
