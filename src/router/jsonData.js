const slicedData = require('../data/sliced_data.json');

exports.getSlicedData = (req, res) => {
  res.json(slicedData);
};
