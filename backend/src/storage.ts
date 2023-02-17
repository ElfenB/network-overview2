import { TasmotaDevice } from './tasmota.types';

const dataPath = process.env.DATAPATH ?? './data';
const fullDataPath = dataPath + '/tasmota.json';

export function storeTasmotaDevice(device: TasmotaDevice) {
  console.log('handling: ' + device.ip);

  // read current data from file
  let devices = getTasmotaDevices();

  const isKnownDevice = devices.filter((d) => d.ip === device.ip).length === 1;
  console.log('🚀 ~ isKnownDevice', isKnownDevice);

  if (isKnownDevice) {
    devices = devices.map((d) => (d.ip === device.ip ? device : d));
  } else {
    devices.push(device);
  }
}

function setTasmotaDevices(devices: TasmotaDevice[]) {
  console.log('writing devices');
}

function getTasmotaDevices(): TasmotaDevice[] {
  // TODO: Read devices
  console.log('reading devices');
  return [];
}
