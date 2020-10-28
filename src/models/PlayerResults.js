import uuidv4 from 'functions/uuidv4';

const PlayerResults = () => ({
  id: uuidv4(),
  answers: [],
  started: (new Date()).toISOString(),
  ended: '',
});

export default PlayerResults;
