const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class TisQuestion extends Model { }

TisQuestion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sentences: {
      type: DataTypes.ARRAY(
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'ti_sentences', key: 'id'},
        }
      )
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'exercises', key: 'id'},
    } 
 
}, {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'tis_question'
})

module.exports = TisQuestion