import boardTest from '../data/board_test.json';

export const getBoardTest = (req, res) => {
  res.json(boardTest);
};
