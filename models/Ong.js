const {Model, DataTypes} = require('sequelize');
cont Doacoes = require('./Doacoes')

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
cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
}
},
{
    sequelize,
    modelName: 'ong',
    tableName: 'ongs'
});

Ong.hasMany(Doacoes);
Doacoes.belongsTo(Ong);
module.exports = Ong;