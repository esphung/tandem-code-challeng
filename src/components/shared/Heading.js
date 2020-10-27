/*
FILENAME:     Heading.js
PURPOSE:      Title to be display on current page to user
AUTHOR:       Eric Phung
CREATED:      10/26/2020 03:18 PM
*/
import React from 'react';

import {
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    margin: 24,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
});

const Heading = ({ title }) => {
  const view = (
    <Text style={styles.heading}>
      { title }
    </Text>
  );
  return view;
};

export default Heading;
