import { useCallback, useMemo } from 'react';
import { DeviceList } from './common/DeviceList';
import { DeviceListHeader } from './common/DeviceListHeader';
import { TileData } from './common/DeviceTile.types';
import { getIsUpToDateAll } from './common/DeviceTile.utils';
import { mongooseDevicesMock } from './MongooseDevices.mockData';

export function MongooseDevices() {
  const devices: TileData[] = mongooseDevicesMock;

  const handleAddTile = useCallback(() => {
    console.log('TODO: Implement adding tile');
    alert('Not implemented yet');
  }, []);

  const handleCheckUpdateAll = useCallback(() => {
    console.log('TODO: Implement');
    alert('To be implemented');
  }, []);

  const handleUpdateDeviceAll = useCallback(() => {
    console.log('TODO: Implement');
    alert('To be implemented');
  }, []);

  const isUpToDateAll = useMemo(() => getIsUpToDateAll(devices), [devices]);

  return (
    <>
      <DeviceListHeader
        handleCheckUpdateAll={handleCheckUpdateAll}
        handleUpdateDeviceAll={handleUpdateDeviceAll}
        isUpToDateAll={isUpToDateAll}
      >
        Mongoose
      </DeviceListHeader>
      <DeviceList devices={devices} handleAddTile={handleAddTile} />
      <hr />
    </>
  );
}
