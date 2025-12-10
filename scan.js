const noble = require('@abandonware/noble');

console.log('Scanning for ELK-BLEDOM devices. Press Ctrl+C to stop.');
console.log('If you do not see anything on macOS, ensure the terminal has Bluetooth permission in System Settings.');

noble.on('stateChange', async (state) => {
  if (state === 'poweredOn') {
    await noble.startScanningAsync([], true);
  } else {
    await noble.stopScanningAsync();
  }
});

noble.on('discover', (peripheral) => {
  const name = peripheral.advertisement?.localName || 'Unknown';
  const isBledom = /BLEDOM/i.test(name) || /BLE/i.test(name);
  if (isBledom) {
    console.log('-----');
    console.log(`Name: ${name}`);
    console.log(`UUID (use in config): ${peripheral.uuid}`);
    console.log(`RSSI: ${peripheral.rssi}`);
  }
});

process.on('SIGINT', async () => {
  await noble.stopScanningAsync();
  process.exit(0);
});
