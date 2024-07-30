import { config } from './wdio.shared.conf';
import { join } from 'path';


config.port = 4720;

config.specs =  [
    'test/specs/iOS/*.ts'
];

config.capabilities = [{

    'appium:platformName': 'Android',
    'appium:automationName' : 'UiAutomator2',        
    'appium:deviceName': 'Android Bigger',
    'appium:clearSystemFiles': true,
    'appium:fullReset': true,
    'appium:noReset': false,
    'appium:autoGrantPermissions':true,
    'appium:avd': 'May29_1',
    'appium:app': join(process.cwd(), 'test/apps/android/com.kayak.apk'),
    'appium:udid': 'emulator-5554',
    "appium:appPackage": "com.kayak.android",
    "appium:appActivity": "com.kayak.android.splash.SplashActivity"

}];

exports.config = config;