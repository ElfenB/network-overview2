import { Box, SxProps, Theme } from '@mui/material';
import { DeviceTile } from './DeviceTile';
import { TileData } from './DeviceTile.types';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
    gap: 1,
    marginTop: 1,
    marginBottom: 2,
  },
};

type Props = {
  devices: TileData[];
};

export function DeviceList({ devices }: Props) {
  return (
    <Box sx={sx.root}>
      {devices.map((d) => (
        <DeviceTile data={d} key={d.name + d.room} />
      ))}
    </Box>
  );
}
