import { Button, Paper, SxProps, Theme, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { TileData } from './DeviceTile.types';
import { getIsUpToDate, getVersionColor } from './DeviceTile.utils';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    minHeight: (theme) => theme.spacing(15),
    padding: 1,
    width: (theme) => theme.spacing(20),
  },
  updateButton: {
    width: '100%',
    marginTop: 1,
  },
};

type Props = {
  data: TileData;
};

export function DeviceTile({ data }: Props) {
  const isUpToDate = useMemo(() => getIsUpToDate(data.version, data.latestVersion), [data.version, data.latestVersion]);

  const updateString = useMemo(() => {
    console.log(data.name, isUpToDate, data.version, data.latestVersion);

    if (isUpToDate === undefined) {
      return '?';
    }
    return isUpToDate ? '' : `(${data.latestVersion})`;
  }, [isUpToDate, data.latestVersion]);

  const handleUpdateDevice = useCallback(() => {
    console.log('TODO: Implement update functionality');
    alert('Not implemented yet');
  }, []);

  return (
    <Paper sx={sx.root}>
      <Typography variant="h6">{data.name}</Typography>

      <Typography variant="body1">{data.room}</Typography>

      <Typography sx={{ color: getVersionColor(isUpToDate) }} variant="body2">
        {data.version} {updateString}
      </Typography>

      {!isUpToDate && isUpToDate !== undefined && (
        <Button onClick={handleUpdateDevice} sx={sx.updateButton}>
          Update
        </Button>
      )}
    </Paper>
  );
}
