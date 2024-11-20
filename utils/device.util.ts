import * as Device from 'expo-device';
import {deviceWidth} from "./responsive.util";

export const isIOS = () => Device.osName === 'iOS';
export const isTablet = () => deviceWidth >= 768;