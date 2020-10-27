// global app data

import app from './app.json';

// console.log('app: ', app);

global.appVersion = app.expo.version;

global.MAX_QUESTIONS_PER_ROUND = 10;
