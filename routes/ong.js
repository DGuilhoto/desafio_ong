const express = require('express');
const ong = express.Router();
const Ong = require('../models/Ong')

ong.route('/')
.get(async ( req, res) =>{
    
    try{
    const ongs = await Ong.findAll();
    res.status(200).json(ongs);
} catch (err){
    res.status(500).json(err);
}
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
    const { nome, tipo, desc, cnpj, data_criacao} = req.body
    
    if(!nome || !tipo || !desc || !cnpj || !data_criacao) {
        return res.status(400).json({message: "Campo obrigatório não informado"});
    }
    const ongEncontrada = await Ong.findOne({where: {cnpj}})
    if(!ongEncontrada){
        return res.status(400).json({message: "Ong não encontrada"})
    }

    try{
        const response = await ongEncontrada.update({nome, tipo, desc, data_criacao});
        res.status(200).json({message: `Ong atualizada com sucesso, id: ${ongEncontrada.id}`})
    } catch(err){
        res.status(500).json(err);
    }
})

.delete(async ( req, res) =>{
    const {id} = req.body
    if (!id) {
        return res.status(400).json({ mensagem: "campo obrigatório não informado" });
    }

    const ongEncontrada = Ong.findByPk(id);
    if(!ongEncontrada){
        return res.status(400).json({message: "Ong não encontrada"})
    }
    try{ 
        const response = await Ong.destroy(ongEncontrada);
        res.status(200).json({message: "Ong deletada com sucesso"})
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = ong;