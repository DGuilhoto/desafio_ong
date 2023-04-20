const {Model, DataTypes} = require('sequelize');
const Doacao = require('./Doacao')
const sequelize = require('../db/db')

class Ong extends Model {}

Ong.init({
nome:{
    type: DataTypes.STRING,
    allowNull: false
},
tipo: {
    type: DataTypes.STRING,
    allowNull: false
},
data_criacao:{
    type: DataTypes.DATE,
    allowNull: false
},
desc:{
    type: DataTypes.STRING,
    allowNull: false
},
cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
}
},
{
    sequelize,
    modelName: 'ong',
    tableName: 'ongs',
    paranoid: true
});

Ong.hasMany(Doacao);
Doacao.belongsTo(Ong);
module.exports = Ong;