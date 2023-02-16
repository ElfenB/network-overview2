import EditIcon from '@mui/icons-material/Edit';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
// eslint-disable-next-line import/order
import { useMemo } from 'react';

const sx: Record<string, SxProps<Theme>> = {
  buttons: {
    ':hover': {
      color: 'primary.main',
    },
    color: 'grey.400',
  },
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
  handleEdit: () => void;
  multipleItems?: boolean;
};

export function UpdateButton({ isUpToDate, handleUpdateDevice, handleCheckUpdate, multipleItems, handleEdit }: Props) {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isUpdateNotPossible = useMemo(() => isUpToDate || isUpToDate === undefined, [isUpToDate]);

  return (
    <Box sx={sx.root}>
      {/* Button is hidden with CSS so that it stays mounted for layout purposes */}
      <Button
        disabled={isUpdateNotPossible}
        sx={{ visibility: isUpdateNotPossible ? 'hidden' : 'visible' }}
        onClick={handleUpdateDevice}
      >
        {multipleItems ? 'Update all' : 'Update'}
      </Button>

      <Tooltip title={multipleItems ? 'Refresh all versions' : 'Refresh version number'}>
        <IconButton sx={sx.buttons} onClick={handleCheckUpdate}>
          <RotateLeftIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit">
        {multipleItems ? (
          <></>
        ) : (
          <IconButton sx={sx.buttons} onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        )}
      </Tooltip>
    </Box>
  );
}
