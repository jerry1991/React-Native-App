/** @format */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
// 隐藏提示
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
