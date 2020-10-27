/*
FILENAME:     ResultsScreen.js
PURPOSE:      Last screen tp show to user on round completion
AUTHOR:       Eric Phung
CREATED:      10/26/2020 03:07 PM
*/
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import styles from 'styles/Results';

// shared components
import Heading from 'components/shared/Heading';
import Instructions from 'components/shared/Instructions';

// screen components
import ListView from 'components/Results/ListView';

// compares lists by items with matching key values
const getCorrectAnswers = (data, results) => {
  // console.log('results.answers: ', results.answers);
  const correctAnswers = data.filter((question, index) => {
    if (data[index].correct === results.answers[index].title) return results.answers[index];
    return null;
  });
  return correctAnswers;
};

// helper function, formats data for list view
const getListData = (questions, results) => {
  const result = questions.map((question, index) => ({
    id: index,
    expected: question.correct,
    actual: results.answers[index] ? results.answers[index].title : '',
  }));
  return result;
};

// begin component def
function ResultsScreen({ navigation, route }) {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answers] = useState(route.params ? route.params.results : []);
  const [questions] = useState(route.params ? route.params.data : []);
  const [listData, setListData] = useState([]);

  // set header button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace('Welcome')} title="Done" />
      ),
    });
  }, [navigation]);

  // component did mount
  useEffect(() => {
    setCorrectAnswers(getCorrectAnswers(questions, answers));
    setListData(getListData(questions, answers));
  }, []);

  // render component
  const view = (
    <View style={styles.container}>
      <Heading title="You are finished, good job!" />
      <Instructions title="Here are your results:" />
      <Text style={styles.text}>
        total questions:
        {' '}
        { questions.length }
      </Text>
      <Text style={styles.text}>
        correct answers:
        {' '}
        { correctAnswers.length }
        {
          correctAnswers.length > 0 ? (
            <Text style={{ opacity: 0.3 }}>
              {` ${(((correctAnswers.length / questions.length).toFixed(2)) * 100).toFixed(2)}%`}
            </Text>
          ) : null
        }
      </Text>
      <ListView listData={listData} />
    </View>
  );
  return view;
} // end component def

export default ResultsScreen;
