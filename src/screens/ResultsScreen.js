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

// import getShortDate from 'functions/getShortDate';
import getTimeInterval from 'functions/getTimeInterval';

import styles from 'styles/Results';

// shared components
import Heading from 'components/shared/Heading';
import Instructions from 'components/shared/Instructions';

// screen components
import ListView from 'components/Results/ListView';

// compares lists by items with matching key values
const getCorrectAnswers = (data, answers) => {
  // console.log('answers: ', answers);
  // console.log('data: ', data);
  // console.log('results.answers: ', results.answers);
  const correctAnswers = answers.filter((answer, index) => {
    if (answer.title) {
      if (answer.title === data[index].correct) return answer;
    }
    // console.log(data[index].correct, answers[index]);
    // if (answer.title === data[index].correct) return answer
    return null;
  });
  return correctAnswers;
};

// helper function, formats data for list view
const getListData = (questions, answers) => {
  const result = questions.map((question, index) => ({
    id: index,
    expected: question.correct,
    actual: answers[index] ? answers[index].title : '',
  }));
  return result;
};

// begin component def
function ResultsScreen({ navigation, route }) {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [listData, setListData] = useState([]);
  const [timeSince, setTimeSince] = useState('');
  // passed props
  const { results } = route.params ? route.params : {};
  const { trivia } = route.params ? route.params : [];

  function startTimer() {
    setInterval(() => {
      // console.log('new Date(): ', new Date());
      setTimeSince(getTimeInterval(results.started, (new Date()).toISOString()));
    }, 1000);
  }
  // set header button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace('Welcome')} title="Done" />
      ),
    });
  }, [navigation]);
  // component mounted
  useEffect(() => {
    startTimer();
  }, []);
  // results or answers mount/change
  useEffect(() => {
    if (results && trivia) {
      setAnswers(results.answers);
      setCorrectAnswers(getCorrectAnswers(trivia, results.answers));
      setListData(getListData(trivia, results.answers));
      results.ended = (new Date()).toISOString();
    }
  }, [results, answers]);
  // render  this view component
  const view = (
    <View style={styles.container}>
      <Heading title="You are finished, good job!" />
      <Instructions title="Here are your results:" />
      <Text style={styles.text}>
        session:
        {' '}
        { getTimeInterval(results.started, results.ended) }
      </Text>
      <Text style={styles.text}>
        { timeSince }
      </Text>
      <Text style={styles.text}>
        total questions:
        {' '}
        { trivia.length }
      </Text>
      <Text style={styles.text}>
        correct answers:
        {' '}
        {
          correctAnswers.length
        }
        {
          correctAnswers.length > 0 ? (
            <Text style={{ opacity: 0.3 }}>
              {` ${(((correctAnswers.length / trivia.length).toFixed(2)) * 100).toFixed(2)}%`}
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
