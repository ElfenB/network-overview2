import { useCallback, useMemo } from 'react';
import { DeviceList } from './common/DeviceList';
import { DeviceListHeader } from './common/DeviceListHeader';
import { TileData } from './common/DeviceTile.types';
import { getIsUpToDateAll } from './common/DeviceTile.utils';
import { tasmotaDevicesMock } from './TasmotaDevices.mockData';

export function TasmotaDevices() {
  const devices: TileData[] = tasmotaDevicesMock;

  const handleAddTile = useCallback(() => {
    console.log('TODO: Implement adding Tasmota devices');
    alert('Not implemented yet');
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
      <DeviceList devices={devices} handleAddTile={handleAddTile} />
    </>
  );
}
