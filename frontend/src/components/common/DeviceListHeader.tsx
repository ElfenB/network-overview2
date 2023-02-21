import WifiFindIcon from '@mui/icons-material/WifiFind';
import { Box, IconButton, SxProps, Theme, Typography } from '@mui/material';
import { UpdateButton } from './UpdateButton';

const sx: Record<string, SxProps<Theme>> = {
  discover: {
    marginLeft: 1,
  },
  heading: {
    alignItems: 'center',
    display: 'flex',
  },
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
  handleDiscover?: () => void;
  isUpToDateAll: boolean | undefined;
};

export function DeviceListHeader({
  children,
  handleCheckUpdateAll,
  handleUpdateDeviceAll,
  handleDiscover,
  isUpToDateAll,
}: Props) {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.heading}>
        <Typography variant="h4">{children}</Typography>
        {handleDiscover && (
          <IconButton sx={sx.discover} onClick={handleDiscover}>
            <WifiFindIcon />
          </IconButton>
        )}
      </Box>
      <UpdateButton
        handleCheckUpdate={handleCheckUpdateAll}
        handleUpdateDevice={handleUpdateDeviceAll}
        isUpToDate={isUpToDateAll}
        multipleItems
      />
    </Box>
  );
}
