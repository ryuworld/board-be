import { Sequelize, Model, DataTypes } from 'sequelize';

export class User extends Model {
  username: string;

  static associate(sequelize: Sequelize, db) {
    User.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
}
