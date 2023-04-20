const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db')

class Doacao extends Model {}

Doacao.init({
    doador: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    sequelize, 
    modelName:'doacao', 
    tableName: 'doacoes',
    paranoid: true
});

module.exports = Doacao;