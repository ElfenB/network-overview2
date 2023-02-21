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
    version: '1.5.3',
  },
  {
    latestVersion: '13.2.1',
    name: 'Dachfenster',
    port: 3000,
    room: 'Schlafzimmer',
    type: 'other',
    url: 'http://pi4',
    version: '12.5.3',
  },
  {
    latestVersion: '13.2',
    name: 'Dachfenster',
    room: 'Arbeitszimmer',
    type: 'other',
    url: 'http://192.168.178.44',
    version: '12.5.3',
  },
];
