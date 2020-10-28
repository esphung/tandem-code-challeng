/*
FILENAME:     Question.js
PURPOSE:      Question
AUTHOR:       Eric Phung
CREATED:      10/28/2020 01:14 PM
*/
// import uuidv4 from 'functions/uuidv4'
const Question = ({
  question,
  correct,
  incorrect,
}) => {
  const obj = {
    // id: uuidv4(),
    question,
    correct,
    incorrect,
  };
  return obj;
};

export default Question;
