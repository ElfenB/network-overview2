import { useCallback } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { DeviceTile } from './DeviceTile';
import { TileData } from './DeviceTile.types';
import { NewDeviceTile } from './NewDeviceTile';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    marginBottom: 2,
    marginTop: 1,
  },
};

type Props = {
  devices: TileData[];
  setDevices: (devices: TileData[]) => void;
};

export function DeviceList({ devices, setDevices }: Props) {
  const handleChangeDevice = useCallback(
    (newDevice: TileData) => {
      // Check if device is already known
      const deviceChanged = devices.filter((d) => d.uuid === newDevice.uuid).length === 1;
      if (deviceChanged) {
        return setDevices(devices.map((d) => (d.uuid === newDevice.uuid ? newDevice : d)));
      }
      return setDevices([...devices, newDevice]);
    },
    [devices, setDevices]
  );

  const handleDeleteDevice = useCallback(
    (device: TileData) => {
      setDevices(devices.filter((d) => d.uuid !== device.uuid));
    },
    [devices, setDevices]
  );

  return (
    <Box sx={sx.root}>
      {devices.map((d) => (
        <DeviceTile
          key={d.name + d.room}
          data={d}
          handleChangeData={handleChangeDevice}
          handleDelete={handleDeleteDevice}
        />
      ))}
      <NewDeviceTile handleAddTile={handleChangeDevice} />
    </Box>
  );
}