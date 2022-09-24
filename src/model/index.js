import { Sequelize, Model, DataTypes } from 'sequelize';

export { User } from './User';

const sequelize = new Sequelize(
  'mysql://admin:T5a9AinNru@ryuworld.studio/board'
);

Object.values(exports).forEach((model) => {
  console.log('forEach', model);
  model.associate(sequelize, exports);
  model.sync();
});
