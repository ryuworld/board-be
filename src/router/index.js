import express from 'express';
import { getSlicedData } from './jsonData';

const router = express.Router();

router.get('/sliced_data.json', getSlicedData);

router.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = router;
