import { useCallback, useMemo, useState } from 'react';
import { DeviceList } from './common/DeviceList';
import { DeviceListHeader } from './common/DeviceListHeader';
import { TileData } from './common/DeviceTile.types';
import { getIsUpToDateAll } from './common/DeviceTile.utils';
import { mongooseDevicesMock } from './MongooseDevices.mockData';

export function MongooseDevices() {
  // const devices: TileData[] = mongooseDevicesMock;
  const [devices, setDevices] = useState<TileData[]>(mongooseDevicesMock);

  const handleCheckUpdateAll = useCallback(() => {
    console.log('TODO: Implement');
    alert('To be implemented');
  }, []);

  const handleUpdateDeviceAll = useCallback(() => {
    console.log('TODO: Implement');
    alert('To be implemented');
  }, []);

  const handleChangeDevice = useCallback(
    (newDevice: TileData) => {
      // Check if device is already known
      const deviceChanged = devices.filter((d) => d.uuid === newDevice.uuid).length === 1;
      if (deviceChanged) {
        setDevices(devices.map((d) => (d.uuid === newDevice.uuid ? newDevice : d)));
      }
    },
    [devices]
  );

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
      <DeviceList devices={devices} handleAddTile={handleChangeDevice} handleChangeDevice={handleChangeDevice} />
      <hr />
    </>
  );
}
