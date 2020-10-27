/*
FILENAME:     App.js
PURPOSE:      App entry point
AUTHOR:       Eric Phung
CREATED:      10/26/2020 02:28 PM
*/
// global variables
import './globals';

import React from 'react';
// import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// stack navigators
import AppStack from 'navigators/AppStack';

function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
