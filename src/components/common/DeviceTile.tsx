import { useCallback, useMemo, useState } from 'react';
import { Box, Link, Paper, SxProps, Theme, Typography } from '@mui/material';
import { DeviceEditModal } from './DeviceEditModal';
import { TileData } from './DeviceTile.types';
import { getIsUpToDate, getVersionColor } from './DeviceTile.utils';
import { UpdateButton } from './UpdateButton';

const sx: Record<string, SxProps<Theme>> = {
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: (theme) => theme.spacing(15),
    padding: 1,
    width: (theme) => theme.spacing(20),
  },
};

type Props = {
  data: TileData;
  handleChangeData: (updatedDevice: TileData) => void;
};

export function DeviceTile({ data, handleChangeData }: Props) {
  const [editMode, setEditMode] = useState(false);

  const isUpToDate = useMemo(() => getIsUpToDate(data.version, data.latestVersion), [data.version, data.latestVersion]);

  const updateString = useMemo(() => {
    if (isUpToDate === undefined || !data.latestVersion) {
      return '?';
    }
    return isUpToDate ? '' : `(${data.latestVersion})`;
  }, [isUpToDate, data.latestVersion]);

  const handleUpdateDevice = useCallback(() => {
    console.warn('TODO: Implement update functionality');
    alert('Not implemented yet');
  }, []);

  const handleCheckUpdate = useCallback(() => {
    console.warn('TODO: Implement update functionality');
    alert('Not implemented yet');
  }, []);

  const getLinkForTile = useMemo(() => data.url + (data.port ? `:${data.port}/` : '/'), [data.url, data.port]);

  const handleEndEditMode = useCallback(() => setEditMode(false), []);
  const handleStartEditMode = useCallback(() => setEditMode(true), []);

  return (
    <Paper sx={sx.root}>
      <Box sx={sx.description}>
        <Link href={getLinkForTile} rel="noreferrer" sx={sx.link} target="_blank">
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
        handleCheckUpdate={handleCheckUpdate}
        handleEdit={handleStartEditMode}
        handleUpdateDevice={handleUpdateDevice}
        isUpToDate={isUpToDate}
      />

      <DeviceEditModal
        handleClose={handleEndEditMode}
        handleSave={handleChangeData}
        initialDevice={data}
        open={editMode}
      />
    </Paper>
  );
}
