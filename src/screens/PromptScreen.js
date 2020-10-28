import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import styles from 'styles/Prompt';

// shared components
import Heading from 'components/shared/Heading';

// screen components
import TriviaCard from 'components/shared/TriviaCard';

// helper function, formats trivia for list view
const getListData = (list) => {
  const result = list.map((element, index) => {
    // give item an id and assign it's value property as the element
    const item = { id: index, title: element };
    // console.log('item: ', item);

    // DEVELOPER DEBUG: display the item as string if not a string
    // if (typeof element !== 'string') item.title = JSON.stringify(element);
    return item;
  });
  return result;
};
// VIEW COMPONENT DEFINITION BEGINS HERE
function PromptScreen({ navigation, route }) {
  // state
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [listData, setListData] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);

  // passed props
  const { cardId, trivia, results } = route.params;

  // navigation
  const showResultsScreen = () => navigation.push('Results', {
    trivia: questions,
    results,
  });
  const showNextPromptScreen = () => {
    // show next page
    if (cardId + 1 < global.MAX_QUESTIONS_PER_ROUND) {
      navigation.push('Prompt', {
        cardId: cardId + 1,
        trivia: questions,
        results,
      });
    } else {
      // show results to player
      showResultsScreen();
    }
  };
  const recordUserResponse = () => {
    // add answer to user's selected answers
    results.answers[cardId] = selectedAnswer;
    // verify selected answer
    if (!selectedAnswer) {
      results.answers[cardId] = {
        id: cardId,
        title: '',
      };
    }
    // display EXPECTED answer in green (or not)
    if (questions[cardId].correct === selectedAnswer.title) {
      // PLAYER WAS RIGHT
      setCorrectAnswer(questions[cardId].correct);
    } else {
      // PLAYER WAS WRONG
      setCorrectAnswer(questions[cardId].correct);
    }
  };
  // event triggers
  const submitBtnPressed = () => recordUserResponse();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace('Welcome')} title="New Game" />
      ),
    });
  }, [navigation]);
  useEffect(() => {
    setQuestions(trivia);
    // global.MAX_QUESTIONS_PER_ROUND
    if (cardId >= global.MAX_QUESTIONS_PER_ROUND) showResultsScreen();

    // combine answers to be displayed
    const answers = trivia[cardId].incorrect.concat(trivia[cardId].correct);

    // parse answers into list trivia format
    setListData(getListData(answers));

    if (results.answers[cardId] && results.answers[cardId].title !== '') setSelectedAnswer(results.answers[cardId]);
  }, [cardId]);
  const view = (
    <View style={styles.container}>
      {/* TRIVIA CARD */}
      <Heading title={`Question Number:${' '}${cardId + 1}`} />
      <TriviaCard
        item={trivia[cardId]}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        cardId={cardId}
        results={results}
        listData={listData}
        setListData={setListData}
        correctAnswer={correctAnswer}

      />
      {/* SUBMIT BUTTON */}
      {
        !correctAnswer && (
          <TouchableOpacity
            disabled={!selectedAnswer}
            style={
              selectedAnswer ? styles.btn : [
                styles.btn,
                {
                  opacity: 0.3,
                },
              ]
            }
            onPress={submitBtnPressed}
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        )
      }
      {
        correctAnswer && (
          <TouchableOpacity
            style={styles.btn}
            onPress={showNextPromptScreen}
          >
            <Text style={styles.btnText}>Next Question</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
  return view;
} // END VIEW DEF

export default PromptScreen;
