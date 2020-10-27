/*
FILENAME:     TriviaCard.js
PURPOSE:      View that displays trivia question and answers
AUTHOR:       Eric Phung
CREATED:      10/26/2020 03:27 PM
*/
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import MultipleChoiceList from 'components/Prompt/MultipleChoiceList';

const styles = StyleSheet.create({
  northPanel: {
    flex: 0.5,
    // backgroundColor: 'powderblue',
  },
  southPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'steelblue',
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
const TriviaCard = ({
  item,
  setSelectedAnswer,
  selectedAnswer,
  listData,
  correctAnswer,
}) => {
  // render view component
  const view = (
    <View
      style={{
        height: '75%',
        width: '100%',
      }}
    >
      <View style={styles.northPanel}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={styles.text}>
            {
              item.question
            }
          </Text>
        </View>
      </View>
      <View style={styles.southPanel}>
        <MultipleChoiceList
          listData={listData}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
        />
      </View>

    </View>
  );
  return view;
};

export default TriviaCard;
