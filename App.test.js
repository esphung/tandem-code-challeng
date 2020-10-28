import Question from 'models/Question';
import PlayerResults from 'models/PlayerResults';
// import uuidv4 from 'functions/uuidv4';

import data from './data/trivias.json';

// TEST DATA TYPES
test('validate model types', () => {
  // trivia questions
  expect(Question({
    question: 'Hello?',
    correct: 'World',
    incorrect: ['Foo', 'Bar'],
  })).toEqual({ question: 'Hello?', correct: 'World', incorrect: ['Foo', 'Bar'] });
  // player results
  expect(Object.keys(PlayerResults())).toEqual(['id', 'answers', 'started', 'ended']);
});

// TRIVIA DATA
test('validate trivia data', () => {
  expect(data.length > 0).toBe(true);
  expect(Object.keys(data[0]).includes('question')).toBe(true);
  expect(Object.keys(data[0]).includes('correct')).toBe(true);
  expect(Object.keys(data[0]).includes('incorrect')).toBe(true);
  expect(typeof data[0].correct === 'string').toBe(true);
  expect(data[0].incorrect.length > 0).toBe(true);
});
