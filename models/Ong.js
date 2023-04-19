const {Model, DataTypes} = require('sequelize');

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
    allowNull: false
}
}, {sequelize,
    modelName: 'ong',
    tableName: 'ongs'
});