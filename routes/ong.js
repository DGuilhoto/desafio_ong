const express = require('express');
const ong = express.Router();
const Ong = require('../models/Ong')

ong.route('/')
.get(async ( req, res) =>{
    
})
.post(async ( req, res) =>{

    const {nome, tipo, cnpj, desc, data_criacao} = req.body

    if(!nome || !tipo || !desc || !cnpj || !data_criacao) {
        return res.status(400).json({message: "Campo obrigatório não informado"});
    }
    try{
        const novaOng = await Ong.create(req.body);
        res.status(201).json({message: `Ong criada com sucesso, id: ${novaOng.id}`})

    } catch(err) {
        res.status(400).json(err);
    }
})
.put(async ( req, res) =>{
    res.json({message: "put funcionando"})
})
.delete(async ( req, res) =>{
    res.json({message: "delete funcionando"})
});

module.exports = ong;