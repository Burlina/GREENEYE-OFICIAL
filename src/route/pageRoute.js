import Router from "express";
import express  from "express";
import path from 'path';
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/view/index.html'))
})


router.get('/login', (req, res) {
    res.sendFile(path.resolve('public/view/login.html'))
})

export default router