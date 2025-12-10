# homebridge-ledstrip-bledom

This plugin let you control RGB Bluetooth-enabled "ELK-BLEDOM" LED light strips, that are compatible with the Lotus Lantern app.

Control On/Off, Hue, Saturation and Brightness.

## Prerequisite
You need to have a bluetooth device. On Linux you can check using `hcitool dev` command. You may also need root access with Homebridge.

On macOS you do **not** need `setcap`, but you must allow your Homebridge/Terminal process to use Bluetooth:

1. Open **System Settings → Privacy & Security → Bluetooth**.
2. Make sure the Terminal app (or the Homebridge UI service, if it prompts) is allowed to use Bluetooth.
3. You may need to restart Homebridge after granting permission.

To find nearby ELK-BLEDOM devices on either Linux or macOS, run:

```
npm run scan
```

The script will print the discovered device names and UUIDs you can copy into the configuration.

## Installation

`npm i @bjclopes/homebridge-ledstrip-bledom`

From version 2.0.11, the plugin is being run in a child bridge and, as a fail-safe, the child bridge restarts if the peripheral becomes unreacheable.

## Configuration
```js
{
    "accessory": "LedStrip", // Dont change
    "name": "LED", // Accessory name
    "uuid": "be320202f8e8" // BLE device UUID
}
```

To find your device uuid, use `hcitool lescan`, grab the device uuid, remove all ':' and use lowercase alpha characters

## Contribution
This package is based on the work of [Lylya](https://github.com/Lyliya) on the project [homebridge-ledstrip-ble](https://github.com/Lyliya/homebridge-ledstrip-ble/).
The new configuration parameters are based on the work of [user154lt](https://github.com/user154lt) on the project [ELK-BLEDOM-Command-Util](https://github.com/user154lt/ELK-BLEDOM-Command-Util).

You can contribute by creating merge request, you can find a documentation of the BLE message used here : [Documentation](https://github.com/arduino12/ble_rgb_led_strip_controller/blob/master/README.md)
