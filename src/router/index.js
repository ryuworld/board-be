import express from 'express';
import { getSlicedData } from './jsonData';
import { getBoardTest } from './board';

const router = express.Router();

router.get('/board/test.json', getBoardTest);

router.get('/sliced_data.json', getSlicedData);

router.get('/', (req, res) => {
  res.send('Hello world!');
});

export default router;
