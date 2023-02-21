import { describe, expect, it } from 'vitest';
import { TileData } from './DeviceTile.types';
import { getIsUpToDate, getIsUpToDateAll, getVersionColor } from './DeviceTile.utils';

describe('getIsUpToDate', () => {
  it('should return undefined when latest version is empty', () => {
    const currentVersion = '1.1.1';
    const latestVersion = '';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBeUndefined();
  });

  it('should return undefined when latest version is in the wrong format', () => {
    const currentVersion = '1.1.1';
    const latestVersion = '2.1';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBeUndefined();
  });

  it('should return undefined when the current version is the wrong format', () => {
    const currentVersion = '1.1.1.3';
    const latestVersion = '1.2';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBeUndefined();
  });

  it('should return false when when the current version is outdated', () => {
    let currentVersion = '1.1.1';
    let latestVersion = '1.1.2';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBe(false);

    currentVersion = '1.1.1';
    latestVersion = '1.2.1';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBe(false);

    currentVersion = '1.1.1';
    latestVersion = '2.1.1';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBe(false);
  });

  it('should return true when the versions are the same', () => {
    const currentVersion = '1.1.1';
    const latestVersion = '1.1.1';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBe(true);
  });

  it('should return undefined when input values are undefined', () => {
    let currentVersion = undefined;
    let latestVersion = undefined;
    expect(getIsUpToDate(currentVersion, latestVersion)).toBeUndefined();

    currentVersion = undefined;
    latestVersion = '2.1.1';
    expect(getIsUpToDate(currentVersion, latestVersion)).toBeUndefined();

    currentVersion = '1.1.1';
    latestVersion = undefined;
    expect(getIsUpToDate(currentVersion, latestVersion)).toBeUndefined();
  });
});

describe('getIsUpToDateAll', () => {
  it('should return true when all devices are up to date', () => {
    const devices: TileData[] = [
      {
        latestVersion: '1.2.3',
        type: 'other',
        name: 'Rollladen',
        room: 'Schlafzimmer',
        url: 'http://192.168.178.101',
        version: '1.2.3',
      },
      {
        latestVersion: '1.2.3',
        type: 'other',
        name: 'Rollladen rechts',
        room: 'Eltern-Schlafzimmer',
        url: 'http://192.168.178.152',
        version: '1.2.3',
      },
    ];
    expect(getIsUpToDateAll(devices)).toBe(true);
  });

  it('should return undefined when all devices have no version number', () => {
    const devices: TileData[] = [
      {
        type: 'other',
        name: 'Rollladen',
        room: 'Schlafzimmer',
        url: 'http://192.168.178.101',
      },
      {
        type: 'other',
        name: 'Rollladen rechts',
        room: 'Eltern-Schlafzimmer',
        url: 'http://192.168.178.152',
      },
    ];
    expect(getIsUpToDateAll(devices)).toBe(undefined);
  });

  it('should return false when some devices have no version number and at least one can be updated', () => {
    const devices: TileData[] = [
      {
        type: 'other',
        name: 'Rollladen',
        room: 'Schlafzimmer',
        url: 'http://192.168.178.101',
      },
      {
        latestVersion: '1.2.5',
        type: 'other',
        name: 'Rollladen rechts',
        room: 'Eltern-Schlafzimmer',
        url: 'http://192.168.178.152',
        version: '1.2.3',
      },
    ];
    expect(getIsUpToDateAll(devices)).toBe(false);
  });

  it('should return true when some devices have no version number and all others are up-to-date', () => {
    const devices: TileData[] = [
      {
        type: 'other',
        name: 'Rollladen',
        room: 'Schlafzimmer',
        url: 'http://192.168.178.101',
      },
      {
        latestVersion: '1.2.5',
        type: 'other',
        name: 'Rollladen rechts',
        room: 'Eltern-Schlafzimmer',
        url: 'http://192.168.178.152',
        version: '1.2.5',
      },
    ];
    expect(getIsUpToDateAll(devices)).toBe(true);
  });
});

describe('getVersionColor', () => {
  it('should return green for true/up-to-date', () => {
    expect(getVersionColor(true)).toBe('success.main');
  });

  it('should return black for undefined', () => {
    expect(getVersionColor(undefined)).toBe('common.black');
  });

  it('should return yellow for false/not-up-to-date', () => {
    expect(getVersionColor(false)).toBe('warning.main');
  });
});
