import mqtt from 'mqtt';
import { storeDiscoveredTasmotaDevice } from './storage';
import { TasmotaDevice } from './tasmota.types';

export function mqttSetup() {
  const mqttUrl = process.env.MQTTURL ?? 'localhost';
  const mqttPort = process.env.MQTTPORT ?? '1883';
  const mqttFullPath = 'mqtt://' + mqttUrl + ':' + mqttPort;

  const client = mqtt.connect(mqttFullPath);

  // Topics to subscribe to
  const tasmotaTopic = process.env.TASMOTATOPIC ?? 'tasmota';
  const fullTasmotaTopic = tasmotaTopic + '/discovery/+/config';

  client.on('connect', () => {
    console.log('connected to MQTT broker with path: ' + mqttFullPath + '\n');

    client.subscribe(fullTasmotaTopic);
    console.log('subscribed to topic: ' + fullTasmotaTopic + '\n');

    client.publish('network-overview2', 'api online');
  });

  client.on('message', (topic, message) => {
    // console.log('message: ' + message, ' on topic: ' + topic);
    if (topic.includes(tasmotaTopic)) {
      handleTasmotaMessage(message.toString());
    }
  });

  client.on('error', (err) => {
    console.warn('An error within the mqtt connection: ' + err.message);
  });

  client.on('disconnect', () => {
    client.publish('network-overview2', 'api offline - disconnect');
    // client.end();
  });
}

function handleTasmotaMessage(message: string) {
  // console.log('message: ' + message + '\n');
  const data = JSON.parse(message);

  // check if valid ip
  if (data.ip) {
    const device: TasmotaDevice = {
      ip: data.ip,
      deviceName: data.dn,
      friendlyName: data.hn,
      mac: data.mac,
      deviceType: data.md,
      swVersion: data.sw,
      topic: data.t,
      fullTopic: data.ft,
      subTopics: data.tp,
      stateVariants: data.state,
    };

    // add device to storage when not already there
    storeDiscoveredTasmotaDevice(device);
  }
}
