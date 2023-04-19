const express = require('express');
const ong = express.Router();

ong.route('/')
.get(async ( req, res) =>{
    res.json({message: "Get funcionando"})
})
.post(async ( req, res) =>{
    res.json({message: "post funcionando"})
})
.put(async ( req, res) =>{
    res.json({message: "put funcionando"})
})
.delete(async ( req, res) =>{
    res.json({message: "delete funcionando"})
});

module.exports = ong;