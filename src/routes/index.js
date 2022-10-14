const express = require("express");
const router = express.Router();
const path = require('path');


router.get('/login', (req, res) => {
    res.sendFile(path.resolve('/public/view/login.html'));
})

router.get('/cadEmpresa', (req, res) => {
    res.sendFile(path.resolve('/public/view/cadEmpresa.html'));
})

router.get('/lote', (req, res) => {
    res.sendFile(path.resolve('/public/view/cadLote.html'));
})

router.get('/maquina', (req, res) => {
    res.sendFile(path.resolve('/public/view/cadMaquina.html'));
})

router.get('/especificacoes', (req, res) => {
    res.sendFile(path.resolve('/public/view/cadLote.html#especificacoes'));
})

router.get('/contato', (req, res) => {
    res.sendFile(path.resolve('/public/view/index.html#contact'));
})


router.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve('./public/dashboard.html'));
})

module.exports = router;