import { writeFile } from 'fs';
import { readFile } from 'jsonfile';
import { TasmotaDevice } from './device.types';

const dataPath = process.env.DATAPATH ?? './data';
const fullDataPath = dataPath + '/tasmota.json';

export let tasmotaDevices: TasmotaDevice[] = [];
export let discoveredDevices: TasmotaDevice[] = [];

export async function tasmotaStoreInit() {
  tasmotaDevices = await getFromStorage();
  console.log('🚀 ~ tasmotaDevices:', tasmotaDevices);
}

export function storeDiscoveredTasmotaDevice(device: TasmotaDevice) {
  console.log('discover - handling: ' + device.ip);

  const isKnownDevice = discoveredDevices.filter((d) => d.ip === device.ip).length >= 1;

  if (isKnownDevice) {
    // Replace old object with new/updated version
    discoveredDevices = discoveredDevices.map((d) => (d.ip === device.ip ? device : d));
  } else {
    // Add device to array
    discoveredDevices.push(device);
  }
}

export function addDevicesToStore(devices: TasmotaDevice[]) {
  console.log('Adding devices to store: ' + JSON.stringify(devices));

  devices.forEach((device) => {
    const isIpInStore = tasmotaDevices.filter((d) => d.ip === device.ip).length >= 1;

    if (isIpInStore) {
      // Replace old object with new/updated version
      tasmotaDevices = tasmotaDevices.map((d) => (d.ip === device.ip ? device : d));
    } else {
      // Add device to array
      tasmotaDevices.push(device);
    }
  });

  // Persist in file
  saveToStorage(tasmotaDevices);
}

// When not successful, returns error string. Otherwise returns undefined
export function saveToStorage(devices: TasmotaDevice[]): string | undefined {
  console.log('writing devices');
  writeFile(fullDataPath, JSON.stringify(devices, null, 2), { encoding: 'utf-8' }, (err) => {
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

async function getFromStorage(): Promise<TasmotaDevice[]> {
  let ret: TasmotaDevice[] = [];

  try {
    ret = await readFile(fullDataPath, {encoding: 'utf-8'})
  } catch (err) {
    console.warn(`Error reading file "${fullDataPath}", returning empty array. Perhaps you provided an empty file.`);
  }

  return ret;
}
