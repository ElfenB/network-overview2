export type TasmotaDevice = {
  ip: string;
  name: string; // dn
  url: string;
  version: string; // sw
  friendlyName?: string; // hn
  mac?: string;
  deviceType?: string; // md
  topic?: string; // t
  fullTopic?: string; // ft
  subTopics?: string[];
  stateVariants?: string[];
  type?: string;
};

export type MongooseDevice = {
  id: string;
  name: string;
  model: string;
  stockFwModel: string;
  version: string;
  app?: string;
  type?: string;
  host?: string;
  fwBuild?: string;
  uptime?: number;
  failsafeMode?: boolean;
  authEnabled?: boolean;
};
