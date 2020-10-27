import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

// shared components
import Heading from 'components/shared/Heading';

import TriviaCard from 'components/shared/TriviaCard';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue', // '#ecf0f1',
    padding: 8,
    paddingTop: 50,
  },
  text: {
    margin: 24,
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

// VIEW COMPONENT DEFINITION BEGINS HERE
function PromptScreen({ navigation, route }) {
  // console.log('route.params.results: ', route.params.results);

  // state
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [listData, setListData] = useState([]);

  const [correctAnswer, setCorrectAnswer] = useState(null);


  // props
  const { cardId, data, results } = route.params;
  // console.log('data[cardId].question: ', data[cardId].question);

  // Navigation methods
  const showResultsScreen = () => {
    // console.log('results.answers.length: ', results.answers.length);
    // console.log('data.length: ', data.length);
    navigation.push('Results', {
    data,
    results,
  })};
  const showNextPromptScreen = () => {
    // alert(cardId + 1);
    if (cardId + 1 < global.MAX_QUESTIONS_PER_ROUND) {
      // show next page
      navigation.push('Prompt', {
        cardId: cardId + 1,
        data,
        results,
      });  
    } else {
      showResultsScreen();
    }
  };
  const submitBtnPressed = () => {
    // verify answer
    

    if (selectedAnswer) {
      results.answers[cardId] = selectedAnswer;
    } else {
      results.answers[cardId] = {
        id: cardId,
        title: '',
      }
    }

    // alert(selectedAnswer.title);
    // alert(data[cardId].correct)

    if (data[cardId].correct === selectedAnswer.title) {
      // PLAYER WAS RIGHT
      // alert('message?: DOMString')
      // user's answer is correct, continue on
      setCorrectAnswer(data[cardId].correct);
    } else {
      // PLAYER WAS WRONG
      setCorrectAnswer(data[cardId].correct);

      // user's answer is wrong, display correct one
    }

    // alert(JSON.stringify(selectedAnswer, ["title"], 1));

    // show correct answer to user

    // // navigate to next screen
    // if (cardId >= data.length - 1) {
    //   // if end of list, show results screen to user
    //   showResultsScreen();
    // } else {
    //   // else, show user next question
    //   showNextPromptScreen();
    // }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace('Welcome')} title="Quit" />
      ),
    });
  }, [navigation]);
  // when previous user answer or answer changes
  // useEffect(() => {
  //   // record new answer
  //   if (selectedAnswer) {
  //     results.answers[cardId] = selectedAnswer;
  //   } else {
  //     results.answers[cardId] = {
  //       id: cardId,
  //       title: '',
  //     }
  //   }
  //   // console.log('results.answers: ', results.answers);
  // }, [selectedAnswer]);
  // when trivia item changes
  useEffect(() => {
    // global.MAX_QUESTIONS_PER_ROUND
    if (cardId >= global.MAX_QUESTIONS_PER_ROUND) showResultsScreen();
    // combine answers to be displayed
    const answers = data[cardId].incorrect.concat(data[cardId].correct);

    // parse answers into list data format
    setListData(getListData(answers));

    // set any previously chosen player answers
    // console.log('results.answers[cardId]: ', results.answers[cardId]);
    if (results.answers[cardId] && results.answers[cardId].title !== '') setSelectedAnswer(results.answers[cardId]);
  }, [cardId]);
  const view = (
    <View style={styles.container}>
      {/* TRIVIA CARD */}
      <Heading title={`Question Number:${' '}${cardId + 1}`} />
      <TriviaCard
        item={data[cardId]}
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
        !correctAnswer && <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          margin: 24,
          width: '80%',
          borderRadius: 12,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
          borderStyle: 'solid',
        }} onPress={submitBtnPressed}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      }
      {
        correctAnswer && <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          margin: 24,
          width: '80%',
          borderRadius: 12,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
          borderStyle: 'solid',
        }} onPress={showNextPromptScreen}>
          <Text style={styles.btnText}>Next Question</Text>
        </TouchableOpacity>
      }
    </View>
  );
  return view;
} // END VIEW DEF

export default PromptScreen;
