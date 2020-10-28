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

// models
import Question from 'models/Question';
import PlayerResults from 'models/PlayerResults';

// import trivia
import data from 'data/trivias.json';

import shuffle from 'functions/shuffle';

// shared components
import Heading from 'components/shared/Heading';
import Instructions from 'components/shared/Instructions';

const gameInstructionsText = `
You will be shown each question${'\n'}
Questions are multiple choice options.${'\n'}
You can select only 1 answer out of the 4 possible answers${'\n'}
The correct answer will be revealed after you submit your answer${'\n'}
You can see your score at the end of the round${'\n'}
Questions will not repeat in a round${'\n'}
`;

// begin component def
function WelcomeScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);

  const startBtnPressed = () => {
    navigation.push('Prompt', {
      cardId: 0,
      trivia: questions,
      results: PlayerResults(),
    });
  };
  // component did mount
  useEffect(() => {
    const list = [];
    // randomize the new set of questions
    shuffle(data).forEach((item, index) => {
      // only add the max number of questions per round
      if (index >= global.MAX_QUESTIONS_PER_ROUND) return;
      const question = Question(item);
      question.id = index;
      list.push(question);
    });
    setQuestions(list);
  }, []);
  const view = (
    <View style={styles.container}>
      <Heading title="Tandem Ten Trivia Game" />
      <Instructions title={gameInstructionsText} />
      <View>
        <Button
          title="Start Game"
          onPress={startBtnPressed}
        />
        <Text style={styles.text}>
          { global.appDeveloperName }
          {'\n'}
          { global.appVersion }
        </Text>
      </View>
    </View>
  );
  return view;
} // end component def

export default WelcomeScreen;
