const {Model, DataTypes} = require('sequelize');

class Doacoes extends Model {}

Ong.init({
doador:{
    type: DataTypes.STRING,
    allowNull: false
},
valor: {
    type: DataTypes.STRING,
    allowNull: false
}

}, {sequelize,
    modelName: 'doacoes',
    tableName: 'doacoes'
});

module.exports = Doacoes