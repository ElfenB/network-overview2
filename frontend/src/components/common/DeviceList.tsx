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
  setDevices?: (devices: TileData[]) => void;
  edit?: boolean;
};

export function DeviceList({ edit = true, devices, setDevices }: Props) {
  const handleChangeDevice = useCallback(
    (newDevice: TileData) => {
      if (!setDevices) {
        return;
      }
      // Check if device is already known
      const isAlreadyKnown = devices.filter((d) => d.url === newDevice.url).length >= 1;
      if (isAlreadyKnown) {
        return setDevices(devices.map((d) => (d.url === newDevice.url ? newDevice : d)));
      }
      return setDevices([...devices, newDevice]);
    },
    [devices, setDevices]
  );

  const handleDeleteDevice = useCallback(
    (device: TileData) => {
      if (!setDevices) {
        return;
      }
      setDevices(devices.filter((d) => d.url !== device.url));
    },
    [devices, setDevices]
  );

  return (
    <Box sx={sx.root}>
      {devices.length > 0 &&
        devices.map((d) => (
          <DeviceTile
            key={d.url}
            data={d}
            edit={edit}
            handleChangeData={handleChangeDevice}
            handleDelete={handleDeleteDevice}
          />
        ))}

      {edit && <NewDeviceTile handleAddTile={handleChangeDevice} />}
    </Box>
  );
}
