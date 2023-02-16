import { Container, SxProps, Theme } from '@mui/material';
import { MongooseDevices } from './MongooseDevices';
import { TasmotaDevices } from './TasmotaDevices';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    padding: 2,
  },
};

export function Content() {
  return (
    <Container sx={sx.root}>
      <MongooseDevices />
      <TasmotaDevices />
    </Container>
  );
}
