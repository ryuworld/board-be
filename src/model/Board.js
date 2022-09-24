import { Sequelize, Model, DataTypes } from 'sequelize';

export class Board extends Model {
  static associate(sequelize, db) {
    const model = Board.init(
      {
        title: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'boards',
      }
    );
  }
}

// let board = await Board.findOne({where:{id:1}});
// let user = await User.findOne({ where: { id: board.user } });
