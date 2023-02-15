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

export function getVersionColor(isUpToDate: boolean | undefined): string {
  if (isUpToDate === undefined) {
    return 'common.black';
  }
  return isUpToDate ? 'success.main' : 'warning.main';
}
