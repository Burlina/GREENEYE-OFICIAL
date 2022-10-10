import Router from "express";
import express  from "express";
import path from 'path';
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/view/index.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.resolve('public/view/login.html'))
})

router.get('/cadastroempresa', (req, res) => {
    res.sendFile(path.resolve('public/view/cadastroEmpresa.html'))
})

router.get('/cadastrousuario', (req, res) => {
    res.sendFile(path.resolve('public/view/cadastroUsuario.html'))
})

router.get('/calculadora', (req, res) => {
    res.sendFile(path.resolve('public/view/calculadora.html'))
})

export default router