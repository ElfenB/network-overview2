import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Box, Button, IconButton } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { useMemo } from 'react';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    width: '100%',
    marginTop: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
};

type Props = {
  isUpToDate: boolean | undefined;
  handleUpdateDevice: () => void;
  handleCheckUpdate: () => void;
};

export function UpdateButton({ isUpToDate, handleUpdateDevice, handleCheckUpdate }: Props) {
  const updateNotPossible = useMemo(() => isUpToDate || isUpToDate === undefined, [isUpToDate]);

  return (
    <Box sx={sx.root}>
      <Button onClick={handleUpdateDevice} disabled={updateNotPossible}>
        Update
      </Button>

      <IconButton onClick={handleCheckUpdate}>
        <RotateLeftIcon color="primary" />
      </IconButton>
    </Box>
  );
}
