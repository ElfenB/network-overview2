import { Box, Link, Paper, SxProps, Theme, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { TileData } from './DeviceTile.types';
import { getIsUpToDate, getVersionColor } from './DeviceTile.utils';
import { UpdateButton } from './UpdateButton';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: (theme) => theme.spacing(15),
    padding: 1,
    width: (theme) => theme.spacing(20),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

type Props = {
  data: TileData;
};

export function DeviceTile({ data }: Props) {
  const isUpToDate = useMemo(() => getIsUpToDate(data.version, data.latestVersion), [data.version, data.latestVersion]);

  const updateString = useMemo(() => {
    if (isUpToDate === undefined) {
      return '?';
    }
    return isUpToDate ? '' : `(${data.latestVersion})`;
  }, [isUpToDate, data.latestVersion]);

  const handleUpdateDevice = useCallback(() => {
    console.log('TODO: Implement update functionality');
    alert('Not implemented yet');
  }, []);

  const handleCheckUpdate = useCallback(() => {
    console.log('TODO: Implement update functionality');
    alert('Not implemented yet');
  }, []);

  const getLinkForTile = useMemo(() => data.url + (data.port ? `:${data.port}` : '') + '/', [data.url, data.port]);

  return (
    <Paper sx={sx.root}>
      <Box sx={sx.description}>
        <Link sx={sx.link} href={getLinkForTile} target="_blank" rel="noreferrer">
          <Typography variant="h6">{data.name}</Typography>
        </Link>

        <Typography variant="body1">{data.room}</Typography>
        {data.version && (
          <Typography sx={{ color: getVersionColor(isUpToDate) }} variant="body2">
            {data.version} {updateString}
          </Typography>
        )}
      </Box>

      <UpdateButton
        isUpToDate={isUpToDate}
        handleUpdateDevice={handleUpdateDevice}
        handleCheckUpdate={handleCheckUpdate}
      />
    </Paper>
  );
}
