/*
FILENAME:     Instructions.js
PURPOSE:      Instructions to user for current screen
AUTHOR:       Eric Phung
CREATED:      10/26/2020 03:17 PM
*/
import React from 'react';

import {
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    margin: 24,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const Instructions = ({ title }) => {
  const view = (
    <Text style={styles.heading}>
      { title }
    </Text>
  );
  return view;
};

export default Instructions;
