const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Exercise extends Model { }

Exercise.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    task: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    unit: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    } 
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'exercise'
})

module.exports = Exercise