import { readFile, writeFile } from 'fs';
import { TasmotaDevice } from './tasmota.types';

const dataPath = process.env.DATAPATH ?? './data';
const fullDataPath = dataPath + '/tasmota.json';

export let discoveredDevices: TasmotaDevice[] = [];

export function storeTasmotaDevice(device: TasmotaDevice) {
  console.log('handling: ' + device.ip);

  const isKnownDevice = discoveredDevices.filter((d) => d.ip === device.ip).length === 1;
  console.log('🚀 ~ isKnownDevice', isKnownDevice);

  if (isKnownDevice) {
    discoveredDevices = discoveredDevices.map((d) => (d.ip === device.ip ? device : d));
  } else {
    discoveredDevices.push(device);
  }
}

// When not successful, returns error string. Otherwise returns undefined
export function saveToStorage(devices: TasmotaDevice[]): string | undefined {
  console.log('writing devices');
  writeFile(fullDataPath, JSON.stringify(devices), { encoding: 'utf-8' }, (err) => {
    // Failure
    if (err) {
      console.warn(err);
      return `Saving the file to ${fullDataPath} was not successful. Error message: ${err}`;
    }

    // Success
    const successMessage = `Successfully saved the file to ${fullDataPath}.`;
    console.log(successMessage);
    return;
  });
  return;
}

function getFromStorage(): TasmotaDevice[] {
  readFile(fullDataPath, { encoding: 'utf-8' }, (ret, err) => {
    // Failure
    if (err) {
      console.warn(err);
    }

    // Success
    return ret;
  });
  return [];
}
