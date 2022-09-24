import { Sequelize, Model, DataTypes } from 'sequelize';

export class Post extends Model {
  title: string;

  static associate(sequelize: Sequelize, db) {
    Post.init(
      {
        user: DataTypes.INTEGER,
        title: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'posts',
      }
    );
  }
}
