import { useCallback, useEffect, useMemo, useState } from 'react';
import { getData } from '../utils/getData';
import { DeviceList } from './common/DeviceList';
import { DeviceListHeader } from './common/DeviceListHeader';
import { TileData } from './common/DeviceTile.types';
import { getIsUpToDateAll } from './common/DeviceTile.utils';

export function MongooseDevices() {
  // const devices: TileData[] = mongooseDevicesMock;
  const [devices, setDevices] = useState<TileData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('mongoose');
      setDevices(data);
    };
    void fetchData();
  }, []);

  const handleSetDevices = useCallback((devices: TileData[]) => {
    // TODO: Save devices when has changed
    setDevices(devices);
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
      <DeviceList devices={devices} setDevices={handleSetDevices} />
      <hr />
    </>
  );
}
