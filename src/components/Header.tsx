import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { Box, SxProps, Theme, Typography } from '@mui/material';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    background: (theme) => theme.palette.primary.main,
    display: 'flex',
  },
  image: {
    // height: 'fit-content',
    // width: 'fit-content'
    fontSize: 50,
    margin: 'auto 0',
    padding: 1,
  },
};

export function Header() {
  return (
    <Box sx={sx.root}>
      <DevicesOtherIcon sx={sx.image} />
      <Typography variant="h2">Network Overview</Typography>
    </Box>
  );
}
