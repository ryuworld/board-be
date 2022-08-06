import express from 'express';
import { getSlicedData } from './jsonData';
import { getBoardTest } from './board';
import { User } from '../model';

const router = express.Router();

router.get('/board/test.json', getBoardTest);

router.get('/sliced_data.json', getSlicedData);

router.get('/', async (req, res) => {
  let user = (await User.findAll())[0];
  res.send(`Hello ${user.username}!`);
});

export default router;
