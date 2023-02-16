import { TileData } from './DeviceTile.types';
export function getIsUpToDate(
  currentVersion: string | undefined,
  latestVersion: string | undefined
): boolean | undefined {
  // Latest version is empty or one of the inputs is undefined
  if (!currentVersion || !latestVersion || latestVersion === '') {
    return undefined;
  }

  // Is up to date
  if (currentVersion === latestVersion) {
    return true;
  }

  const versionMatchPattern = /^(\d+\.)(\d+\.)(\*|\d+)$/;

  // wrong format
  if (!versionMatchPattern.test(currentVersion) || !versionMatchPattern.test(latestVersion)) {
    return undefined;
  }

  // Split string on dots
  const currentVersionArray = currentVersion.split('.');
  const latestVersionArray = latestVersion.split('.');

  // Compare current version to latest version number by number
  return currentVersionArray.every((num, i) => num === latestVersionArray[i]);
}

export function getIsUpToDateAll(devices: TileData[]): boolean | undefined {
  let evalMap = devices.map((d) => getIsUpToDate(d.version, d.latestVersion));

  // Strip of undefined values
  evalMap = evalMap.filter((k) => k !== undefined);

  // When empty array return undefined
  if (evalMap.length === 0) {
    return undefined;
  }

  // When every true, return true, otherwise return false
  return evalMap.every((k) => k);
}

export function getVersionColor(isUpToDate: boolean | undefined): string {
  if (isUpToDate === undefined) {
    return 'common.black';
  }
  return isUpToDate ? 'success.main' : 'warning.main';
}
