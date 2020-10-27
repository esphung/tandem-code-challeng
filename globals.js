/*
FILENAME:     globals.js
PURPOSE:      stores global app values
AUTHOR:       Eric Phung
CREATED:      date
*/

import app from './app.json';

global.appVersion = app.expo.version;

global.MAX_QUESTIONS_PER_ROUND = 10;
