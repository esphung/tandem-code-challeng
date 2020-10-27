import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

const equalIcon = <FontAwesome5 name="equals" size={18} color="black" />

const notEqualIcon = <FontAwesome5 name="not-equal" size={18} color="black" />

const Item = ({ item, style }) => {
  // if (!item) return null
  return (
  <View style={[styles.item, { flexDirection: 'row', justifyContent: 'space-between', }, {
    borderColor: (item.expected === item.actual ? '#0bf446' : '#ff0000'),
    opacity: (item.expected === item.actual) ? 1.0 : 0.5,
  }]}>
    <Text style={[styles.text, styles.left, {
      flex: 1,
    }]}>{ item.expected }</Text>
    <Text style={[styles.text, styles.icon]}>
      {
        item.expected === item.actual ? equalIcon : notEqualIcon
      }
    </Text>
    <Text style={[styles.text, styles.right, {
      flex: 1,
    }]}>{item.actual}</Text>
  </View>
)};

const ListView = ({ listData }) => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    paddingTop: 50,
    paddingBottom: 50,
    // backgroundColor: '#ecf0f1',
  },
  item: {
    padding: 20,
    marginVertical: 18,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  text: {
    // flex: 1,
    fontSize: 15,
  },
  left: {
    // color: 'gray',
  },
  right: {
    textAlign: 'right',
    // color: 'gray',
    // opacity: 0.5,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    opacity: 0.7,
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
});

export default ListView;
