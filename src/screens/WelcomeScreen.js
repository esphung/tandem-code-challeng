/*
FILENAME:     WelcomeScreen.js
PURPOSE:      Welcome screen show to user on beginning game
AUTHOR:       Eric Phung
CREATED:      10/26/2020 02:29 PM
*/
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import styles from 'styles/Welcome';

// import data
import data from 'data/trivias.json';
// console.log('trivias: ', trivias);

// import functions
import uuidv4 from 'functions/uuidv4';
import shuffle from 'functions/shuffle';

// shared components
import Heading from 'components/shared/Heading';
import Instructions from 'components/shared/Instructions';

// begin component def
function WelcomeScreen({ navigation }) {
  const [answers, setAnswers] = useState([]);

  const [questions, setQuestions] = useState([]);

  // component did mount
  useEffect(() => {
    // set 10 (or global limit of) questions per round
    const list = [];
    shuffle(data).forEach((item, index) => {
      if (index >= global.MAX_QUESTIONS_PER_ROUND) return;
      item.id = index;
      // return item
      list.push(item);
    });
    setQuestions(list);

    setAnswers([]);
  }, []);
  const view = (
    <View style={styles.container}>
      <Heading title="Tandem Ten Trivia Game" />
      <Instructions title={`
You will be shown each question${'\n'}
Questions are multiple choice options.${'\n'}
You can select only 1 answer out of the 4 possible answers${'\n'}
The correct answer will be revealed after you submit your answer${'\n'}
You can see your score at the end of the round${'\n'}
Questions will not repeat in a round${'\n'}
`}
      />
      <View>
        <Button
          title="Start Game"
          onPress={() => {
            // // format external provided data
            // const uniqueData = (data.map((item, index) => {
            //   // item.id = index
            //   return item
            // }))

            // get new, empty player results
            const results = {
              id: uuidv4(),
              answers,
            };
            navigation.push('Prompt', {
              cardId: 0,
              data: questions,
              results,
            });
          }}
        />
        <Text style={styles.text}>
          Developed by Eric Phung
          {'\n'}
          App Version:
          {' '}
          { global.appVersion }
        </Text>
      </View>
    </View>
  );
  return view;
} // end component def

export default WelcomeScreen;
