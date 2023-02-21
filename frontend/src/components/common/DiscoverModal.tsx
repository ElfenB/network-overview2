import { useEffect, useState } from 'react';
import { Container, Modal, Paper, SxProps, Theme, Typography } from '@mui/material';
import { getDiscoveryData } from '../../utils/api';
import { DeviceList } from './DeviceList';
import { DeviceType, TileData } from './DeviceTile.types';

const sx: Record<string, SxProps<Theme>> = {
  content: {
    bgcolor: 'background.paper',
    boxShadow: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    left: '50%',
    maxHeight: '90%',
    minWidth: 300,
    overflow: 'auto',
    p: 4,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

type Props = {
  deviceType: DeviceType;
  handleClose: () => void;
  open: boolean;
};

export function DiscoverModal({ deviceType, open, handleClose }: Props) {
  const [discoveredDevices, setDiscoveredDevices] = useState<TileData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiscoveryData(deviceType);
      setDiscoveredDevices(data);
    };
    void fetchData();
  }, [deviceType]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={sx.content}>
        <Typography variant="h5">Device discovery</Typography>

        <Container>
          <DeviceList devices={discoveredDevices} edit={false} />
        </Container>
      </Paper>
    </Modal>
  );
}
