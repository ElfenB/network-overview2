export type TileData = {
  name: string;
  room: string;
  url: string;
  type: DeviceType;
  version?: string;
  latestVersion?: string;
  port?: number;
};

export const deviceTypes = ['other', 'mongoose', 'system', 'tasmota'] as const;
export type DeviceType = (typeof deviceTypes)[number];

export const initialTileState: TileData = {
  name: '',
  room: '',
  type: 'other',
  url: '',
};

export const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.?[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;
