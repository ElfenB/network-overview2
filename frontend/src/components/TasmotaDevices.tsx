import { useCallback, useMemo, useState } from 'react';
import { DeviceList } from './common/DeviceList';
import { DeviceListHeader } from './common/DeviceListHeader';
import { TileData } from './common/DeviceTile.types';
import { getIsUpToDateAll } from './common/DeviceTile.utils';
import { useGetData } from './hooks/useGetData';

export function TasmotaDevices() {
  const [devices, setDevices] = useState(useGetData('tasmota'));

  const handleSetDevices = useCallback((devices: TileData[]) => {
    // TODO: Save devices when has changed
    setDevices(devices);
  }, []);

  const handleCheckUpdateAll = useCallback(() => {
    console.log('TODO: Implement check update all Tasmota devices');
    alert('Not implemented yet');
  }, []);

  const handleUpdateDeviceAll = useCallback(() => {
    console.log('TODO: Implement update all Tasmota devices');
    alert('Not implemented yet');
  }, []);

  const isUpToDateAll = useMemo(() => getIsUpToDateAll(devices), [devices]);

  return (
    <>
      <DeviceListHeader
        handleCheckUpdateAll={handleCheckUpdateAll}
        handleUpdateDeviceAll={handleUpdateDeviceAll}
        isUpToDateAll={isUpToDateAll}
      >
        Tasmota
      </DeviceListHeader>
      <DeviceList devices={devices} setDevices={handleSetDevices} />
    </>
  );
}
