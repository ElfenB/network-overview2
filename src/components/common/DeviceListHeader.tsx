import { Box, SxProps, Theme, Typography } from '@mui/material';
import { UpdateButton } from './UpdateButton';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

type Props = {
  children: string;
  handleCheckUpdateAll: () => void;
  handleUpdateDeviceAll: () => void;
  isUpToDateAll: boolean | undefined;
};

export function DeviceListHeader({ children, handleCheckUpdateAll, handleUpdateDeviceAll, isUpToDateAll }: Props) {
  return (
    <Box sx={sx.root}>
      <Typography variant="h4">{children}</Typography>
      <UpdateButton
        handleCheckUpdate={handleCheckUpdateAll}
        handleUpdateDevice={handleUpdateDeviceAll}
        isUpToDate={isUpToDateAll}
        multipleItems
      />
    </Box>
  );
}
