/*
FILENAME:     MultipleChoices.js
PURPOSE:      component that shows llist of answers to user
AUTHOR:       Eric Phung
CREATED:      10/27/2020 02:19 AM
*/
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from 'styles/Prompt';

const checkedCircleIcon = <MaterialIcons style={styles.icon} name="radio-button-checked" size={24} color="black" />;

const uncheckedCircleIcon = <MaterialIcons style={styles.icon} name="radio-button-unchecked" size={24} color="black" />;

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
    <TouchableOpacity
      disabled={correctAnswer}
      onPress={onPress}
      style={
        [
          styles.item, style,
          {
            borderColor: item.title === correctAnswer && correctAnswer ? '#0bf446' : 'gray',
          },
        ]
      }
    >
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

    const isSelected = item.id === selectedAnswer.id;
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
    <SafeAreaView style={styles.multipleChoiceContainer}>
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
