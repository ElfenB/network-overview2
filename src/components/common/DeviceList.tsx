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
  handleAddTile: (device: TileData) => void;
  handleChangeDevice: (device: TileData) => void;
};

export function DeviceList({ devices, handleAddTile, handleChangeDevice }: Props) {
  return (
    <Box sx={sx.root}>
      {devices.map((d) => (
        <DeviceTile key={d.name + d.room} data={d} handleChangeData={handleChangeDevice} />
      ))}
      <NewDeviceTile handleAddTile={handleAddTile} />
    </Box>
  );
}
