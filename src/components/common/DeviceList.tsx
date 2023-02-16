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
  handleAddTile: () => void;
};

export function DeviceList({ devices, handleAddTile }: Props) {
  return (
    <Box sx={sx.root}>
      {devices.map((d) => (
        <DeviceTile key={d.name + d.room} data={d} />
      ))}
      <NewDeviceTile handleAddTile={handleAddTile} />
    </Box>
  );
}
