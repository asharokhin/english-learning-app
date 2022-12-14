const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class McQuestion extends Model { }

McQuestion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    choices: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
    },
    answer: {
        type: DataTypes.INTEGER,
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'exercises', key: 'id'},
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    } 
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'mc_question'
})

module.exports = McQuestion