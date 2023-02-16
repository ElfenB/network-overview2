import { ChangeEvent, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Input,
  MenuItem,
  Modal,
  Paper,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { DeviceType, deviceTypes, initialTileState, TileData, urlRegex } from './DeviceTile.types';

const sx: Record<string, SxProps<Theme>> = {
  ':invalid': {
    color: 'red',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    bgcolor: 'background.paper',
    boxShadow: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    left: '50%',
    minWidth: 300,
    p: 4,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
};

type Props = {
  initialDevice?: TileData;
  open: boolean;
  handleClose: () => void;
  handleSave: (updatedDevice: TileData) => void;
};

export function DeviceEditModal({ handleClose, handleSave, open, initialDevice }: Props) {
  const initialDeviceState = initialDevice ?? initialTileState;

  const [device, setDevice] = useState(initialDeviceState);
  const [urlValidationError, setUrlValidationError] = useState(false);

  const handleFormChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'url') {
      const isValidUrl = urlRegex.test(event.target.value);
      setUrlValidationError(!isValidUrl);
    }
    return setDevice((prevDevice) => ({ ...prevDevice, [event.target.name]: event.target.value }));
  }, []);

  const handleSelectChange = useCallback(
    (event: SelectChangeEvent<DeviceType>) =>
      setDevice((prevDevice) => ({ ...prevDevice, type: event.target.value as DeviceType })),
    []
  );

  const handleCancelButton = useCallback(() => {
    setDevice(initialDeviceState);
    handleClose();
  }, [handleClose, initialDeviceState]);

  const handleSaveButton = useCallback(() => {
    handleSave(device);
  }, [device, handleSave]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={sx.content}>
        <Typography variant="h5">Edit device</Typography>

        <Container sx={sx.inputBox}>
          <Input name="name" placeholder="Name" value={device.name} onChange={handleFormChange} />
          <Input name="room" placeholder="Room" value={device.room} onChange={handleFormChange} />
          <Input
            inputProps={{ style: { color: urlValidationError ? 'red' : 'initial' } }}
            name="url"
            placeholder="URL"
            value={device.url}
            onChange={handleFormChange}
          />
          {urlValidationError && (
            <FormHelperText sx={{ wordWrap: 'break-word' }}>
              Please ensure the correct format for the url (remember to prefix with http:)
            </FormHelperText>
          )}

          <Box>
            <FormHelperText>Device type</FormHelperText>
            <Select size="small" value={device.type} onChange={handleSelectChange}>
              {deviceTypes
                .map((dt) => (
                  <MenuItem key={dt} value={dt}>
                    {dt}
                  </MenuItem>
                ))
                .sort()}
            </Select>
          </Box>

          <FormHelperText>UUID: {device.uuid}</FormHelperText>
        </Container>

        <Box sx={sx.buttons}>
          <Button onClick={handleCancelButton}>Cancel</Button>
          <Button onClick={handleSaveButton}>Save</Button>
        </Box>
      </Paper>
    </Modal>
  );
}
