import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  FlatList,
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'seagreen',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: 'black',
  },
  icon: {
    marginHorizontal: 10,
  },
});

const checkedCircleIcon = <MaterialIcons style={styles.icon} name="radio-button-checked" size={24} color="black" />;

const uncheckedCircleIcon = <MaterialIcons style={styles.icon} name="radio-button-unchecked" size={24} color="black" />;

const selectedBackgroundColor = '#6e3b6e';

const unselectedBackgroundColor = selectedBackgroundColor + '40' // '#f9c2ff';

const Item = ({
  item,
  onPress,
  style,
  isSelected,
  correctAnswer,
}) => {
  // let borderColor = 'gray'
  // // if (item.title === correctAnswer) {
  // //   console.log('correctAnswer: ', correctAnswer);
  // //   // borderColor = 'green'
  // // }
  const view = (
    <TouchableOpacity disabled={correctAnswer} onPress={onPress} style={[styles.item, style, {
      borderColor: item.title === correctAnswer && correctAnswer ? '#0bf446' : 'gray',
    }]}>
      {
        isSelected ? checkedCircleIcon : uncheckedCircleIcon
      }
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  return view;
};

const MultipleChoiceList = ({
  listData,
  setSelectedAnswer,
  selectedAnswer,
  correctAnswer,
}) => {

  // list methods
  const renderItem = ({ item }) => {
    const itemPressed = () => setSelectedAnswer(item);
    // const backgroundColor = item.id === selectedAnswer.id ? selectedBackgroundColor : unselectedBackgroundColor;
    const isSelected = item.id === selectedAnswer.id 
    const view = (
      <Item
        item={item}
        onPress={itemPressed}
        isSelected={isSelected}
        correctAnswer={correctAnswer}
        style={{
          // styled when selected
          // backgroundColor,

          borderWidth: 1,
          borderColor: isSelected ? 'black' : 'transparent',
          borderRadius: 12,
          // borderStyle: 'solid',
        }}
      />
    );
    return view;
  };
  const view = (
    <SafeAreaView style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        extraData={selectedAnswer.id}
        // extraData={selectedId}
      />
    </SafeAreaView>
  );
  return view;
};

export default MultipleChoiceList;
