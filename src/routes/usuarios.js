var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/public/view/cadEmpresa.html", function (req, res) {
    usuarioController.cadEmpresa(req, res);
})

router.post("/public/view/cadLote.html", function (req, res) {
    usuarioController.cadLote(req, res);
})

router.post("/public/view/cadLote.html#", function (req, res) {
    usuarioController.cadEspecificacao(req, res);
})

router.post("/public/view/cadMaquina.html", function (req, res) {
    usuarioController.cadMaquina(req, res);
})

router.post("/public/view/cadUsuarios.html", function (req, res) {
    usuarioController.cadastrar(req, res);
})


router.post("/autenticar", function (req, res) {
    usuarioController.logar(req, res);
});

module.exports = router;