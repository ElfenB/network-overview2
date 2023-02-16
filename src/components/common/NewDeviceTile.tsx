import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Paper, SxProps, Theme } from '@mui/material';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: (theme) => theme.spacing(15),
    padding: 1,
    width: (theme) => theme.spacing(20),
  },
  addIcon: {
    fontSize: 50,
    ':hover': {
      color: 'primary.main',
    },
  },
};

type Props = {
  handleAddTile: () => void;
};

export function NewDeviceTile({ handleAddTile }: Props) {
  return (
    <Paper sx={sx.root}>
      <IconButton onClick={handleAddTile}>
        <AddCircleOutlineIcon color="action" sx={sx.addIcon} />
      </IconButton>
    </Paper>
  );
}
