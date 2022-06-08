import slicedData from '../data/sliced_data.json';

export const getSlicedData = (req, res) => {
  res.json(slicedData);
};
