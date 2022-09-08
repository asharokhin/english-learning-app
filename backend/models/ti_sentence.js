const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class TiSentence extends Model { }

TiSentence.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    pre: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hint: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: true
    } 
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'ti_sentence'
})

module.exports = TiSentence
