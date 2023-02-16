import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Box, Button, IconButton } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { useMemo } from 'react';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 1,
  },
};

type Props = {
  isUpToDate: boolean | undefined;
  handleUpdateDevice: () => void;
  handleCheckUpdate: () => void;
  multipleItems?: boolean;
};

export function UpdateButton({ isUpToDate, handleUpdateDevice, handleCheckUpdate, multipleItems }: Props) {
  const isUpdateNotPossible = useMemo(() => isUpToDate || isUpToDate === undefined, [isUpToDate]);

  return (
    <Box sx={sx.root}>
      <Button
        onClick={handleUpdateDevice}
        disabled={isUpdateNotPossible}
        sx={{ opacity: isUpdateNotPossible ? 0 : 100 }}
      >
        {multipleItems ? 'Update all' : 'Update'}
      </Button>

      <IconButton onClick={handleCheckUpdate}>
        <RotateLeftIcon color="primary" />
      </IconButton>
    </Box>
  );
}
