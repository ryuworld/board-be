const express = require('express')
const { getSlicedData } = require('./jsonData');

const router = express.Router();

router.get('/sliced_data.json', getSlicedData);

module.exports = router;
