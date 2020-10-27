/*
FILENAME:     AppStack.js
PURPOSE:      Stack navigator for main app trivia game
AUTHOR:       Eric Phung
CREATED:      10/26/2020 02:28 PM
*/
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import WelcomeScreen from 'screens/WelcomeScreen';
import PromptScreen from 'screens/PromptScreen';
import ResultsScreen from 'screens/ResultsScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
       <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={
          {
            title: '',
            // title: null,
            headerLeft: null,
          }
        }
      />
      <Stack.Screen
        name="Prompt"
        component={PromptScreen}
        options={{
          // gestureEnabled: false,
          title: '',
          // animationEnabled: false,
          // headerLeft: null,
          // headerLeft: () => {},
        }}
      />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={
         {
          title: '',
          headerLeft: null,
         }
       }
      />
    </Stack.Navigator>
  );
}

export default AppStack;
