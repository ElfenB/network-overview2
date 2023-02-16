import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { DeviceList } from './common/DeviceList';
import { TileData } from './common/DeviceTile.types';
import { mongooseDevicesMock } from './MongooseDevices.mockData';

export function MongooseDevices() {
  const devices: TileData[] = mongooseDevicesMock;

  const handleAddTile = useCallback(() => {
    console.log('TODO: Implement adding tile');
    alert('Not implemented yet');
  }, []);

  return (
    <>
      <Typography variant="h4">Mongoose Devices</Typography>
      <DeviceList devices={devices} handleAddTile={handleAddTile} />
      <hr />
    </>
  );
}
