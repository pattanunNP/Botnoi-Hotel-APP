/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var NativeAppEventEmitter = require('RCTNativeAppEventEmitter')
AppRegistry.registerComponent(appName, () => App);
