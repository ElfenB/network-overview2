import { useCallback, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Paper, SxProps, Theme } from '@mui/material';
import { DeviceEditModal } from './DeviceEditModal';
import { TileData } from './DeviceTile.types';

const sx: Record<string, SxProps<Theme>> = {
  addIcon: {
    ':hover': {
      color: 'primary.main',
    },
    fontSize: 50,
  },
  root: {
    alignItems: 'center',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    minHeight: (theme) => theme.spacing(15),
    padding: 1,
    width: (theme) => theme.spacing(20),
  },
};

type Props = {
  handleAddTile: (device: TileData) => void;
};

export function NewDeviceTile({ handleAddTile }: Props) {
  const [editMode, setEditMode] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const handleEndEditMode = useCallback(() => setEditMode(false), []);
  const handleStartEditMode = useCallback(() => setEditMode(true), []);

  return (
    <>
      <Paper sx={sx.root}>
        <IconButton onClick={handleStartEditMode}>
          <AddCircleOutlineIcon color="action" sx={sx.addIcon} />
        </IconButton>
      </Paper>
      <DeviceEditModal handleClose={handleEndEditMode} handleSave={handleAddTile} open={editMode} />
    </>
  );
}
