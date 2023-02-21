import { useCallback, useEffect, useMemo, useState } from 'react';
import { getData } from '../utils/getData';
import { DeviceList } from './common/DeviceList';
import { DeviceListHeader } from './common/DeviceListHeader';
import { TileData } from './common/DeviceTile.types';
import { getIsUpToDateAll } from './common/DeviceTile.utils';
import { DiscoverModal } from './common/DiscoverModal';

export function TasmotaDevices() {
  const [devices, setDevices] = useState<TileData[]>([]);
  const [discover, setDiscover] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('tasmota');
      setDevices(data);
    };
    void fetchData();
  }, []);

  const handleSetDevices = useCallback((devices: TileData[]) => {
    // TODO: Save devices when has changed
    setDevices(devices);
  }, []);

  const handleDiscover = useCallback(() => setDiscover(true), []);

  const handleCloseDiscovery = useCallback(() => setDiscover(false), []);

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
        handleDiscover={handleDiscover}
        handleUpdateDeviceAll={handleUpdateDeviceAll}
        isUpToDateAll={isUpToDateAll}
      >
        Tasmota
      </DeviceListHeader>

      <DeviceList devices={devices} setDevices={handleSetDevices} />

      <DiscoverModal deviceType="tasmota" handleClose={handleCloseDiscovery} open={discover} />
    </>
  );
}
