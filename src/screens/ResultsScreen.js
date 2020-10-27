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
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

// shared components
import Heading from 'components/shared/Heading';
import Instructions from 'components/shared/Instructions';

import ListView from 'components/Results/ListView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'skyblue', // '#ecf0f1',
    padding: 8,
    paddingTop: 50,
  },
  text: {
    margin: 24,
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
});

const getCorrectAnswers = (data, results) => {
  // alert('message?: DOMString')
  let correctAnswers = data.filter((question, index) => {
    // console.log('data[index].correct: ', data[index].correct);

    // if (index >= global.MAX_QUESTIONS_PER_ROUND) return;

    if (data[index].correct === results.answers[index].title) return results.answers[index]
  })
  // console.log('results.answers: ', results.answers);
  return correctAnswers;
};

const getListData = (questions, results) => {
  // alert('message?: DOMString')
  let result = questions.map((question, index) => {
    // if (index >= global.MAX_QUESTIONS_PER_ROUND) return
    // console.log('questions: ', questions);
    return {
      id: index,
      expected: question.correct,
      actual: results.answers[index] ? results.answers[index].title : '',
    }
  });

  return result;
};

function ResultsScreen({ navigation, route }) {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answers, setAnswers] = useState(route.params ? route.params.results : [])
  const [questions, setQuestions] = useState(route.params ? route.params.data : []);
  const [listData, setListData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace('Welcome')} title="Done" />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setCorrectAnswers(getCorrectAnswers(questions, answers));
    setListData(getListData(questions, answers));
  }, [answers, questions]);

  const view = (
    <View style={styles.container}>
      <Heading title="You are finished, good job!" />
      <Instructions title="Here are your results:" />
        <Text style={styles.text}>total questions: { questions.length }</Text>
      <Text style={styles.text}>correct answers: { correctAnswers.length }
      {
        correctAnswers.length > 0 ? <Text style={{ opacity: 0.3 }}>{` ${(((correctAnswers.length / questions.length).toFixed(2)) * 100).toFixed(2)}%`}
      </Text> : null
      }
      </Text>
      
      <View>
        {/*
          <Button
              title="Go Back to Welcome Screen"
              onPress={() => navigation.navigate('Welcome')}
            />
        */}
      </View>
      <ListView listData={listData} />
    </View>
  );
  return view;
}

export default ResultsScreen;
