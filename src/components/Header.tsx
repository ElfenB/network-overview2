import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { Box, SxProps, Theme, Typography } from '@mui/material';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    background:
      'linear-gradient(69deg, rgba(188,227,254,1) 0%, rgba(170,221,230,1) 25%, rgba(198,252,245,1) 50%, rgba(170,230,205,1) 75%, rgba(188,254,208,1) 100%)',
    display: 'flex',
    padding: 1,
    boxShadow: '1px 2px 5px -1px rgba(0,0,0,0.1)',
  },
  image: {
    fontSize: 50,
    margin: 'auto 0',
    padding: 1,
  },
  title: {
    marginLeft: 1,
  },
};

export function Header() {
  return (
    <Box sx={sx.root}>
      <DevicesOtherIcon sx={sx.image} />
      <Typography variant="h2" sx={sx.title}>
        Network Overview
      </Typography>
    </Box>
  );
}
