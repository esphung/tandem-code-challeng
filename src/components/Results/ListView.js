/*
FILENAME:     ListView.js
PURPOSE:      Shows result of answers user picked in  a list
AUTHOR:       Eric Phung
CREATED:      date
*/
import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
} from 'react-native';

import styles from 'styles/Results';

const equalIcon = <FontAwesome5 name="equals" size={18} color="black" />;

const notEqualIcon = <FontAwesome5 name="not-equal" size={18} color="black" />;

const Item = ({ item }) => {
  const view = (
    <View
      style={
        [
          styles.item,
          {
            flexDirection: 'row', justifyContent: 'space-between',
          },
          {
            borderColor: (item.expected === item.actual ? '#0bf446' : '#ff0000'),
            opacity: (item.expected === item.actual) ? 1.0 : 0.5,
          },
        ]
      }
    >
      <Text
        style={
          [
            styles.listViewText,
            styles.listViewLeftText,
            {
              flex: 1,
            },
          ]
        }
      >
        { item.expected }
      </Text>
      <Text style={[styles.listViewText, styles.icon]}>
        {
          item.expected === item.actual ? equalIcon : notEqualIcon
        }
      </Text>
      <Text style={[styles.listViewText, styles.listViewRightText, { flex: 1 }]}>
        {item.actual}
      </Text>
    </View>
  );
  return view;
};

const ListView = ({ listData }) => {
  const renderItem = ({ item }) => {
    if (!item.actual) return null;
    return (
      <Item item={item} />
    );
  };

  const view = (
    <SafeAreaView style={styles.listView}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
  return view;
};

export default ListView;
