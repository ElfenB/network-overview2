/* eslint-disable import/no-unused-modules */

import { TileData } from './common/DeviceTile.types';

export const mockData: TileData[] = [
  {
    latestVersion: '1.5.3',
    name: 'Fenster',
    port: 1880,
    room: 'Schlafzimmer',
    type: 'other',
    url: 'http://192.168.178.44',
    uuid: 'b5a08796-24d2-4773-a4a3-92b4d85254f7',
    version: '1.5.3',
  },
  {
    latestVersion: '13.2.1',
    name: 'Dachfenster',
    port: 3000,
    room: 'Schlafzimmer',
    type: 'other',
    url: 'http://pi4',
    uuid: '1a9690d7-1d07-467d-8d1e-2a700e2dc2d4',
    version: '12.5.3',
  },
  {
    latestVersion: '13.2',
    name: 'Dachfenster',
    room: 'Arbeitszimmer',
    type: 'other',
    url: 'http://192.168.178.44',
    uuid: '29e459f8-ce1d-4092-9154-9860a318a1d2',
    version: '12.5.3',
  },
];
