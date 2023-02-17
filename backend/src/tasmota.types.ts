export type TasmotaDevice = {
  ip: string
  deviceName?: string  // dn
  friendlyName: string  // hn
  mac?: string
  deviceType?: string  // md
  swVersion: string  // sw
  topic?: string  // t
  fullTopic?: string  // ft
  subTopics?: string[]
  stateVariants?: string[]
}
