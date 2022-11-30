// var express = require("express");
// var router = express.Router();

// var medidaController = require("../controllers/medidaController.cjs");

// router.get("/ultimas/:idArmazem", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idArmazem", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

// module.exports = router;

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController.cjs");

router.get("/ultimas/:valorId", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idCPU", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimasRAM/:idRAM", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});

router.get("/tempo-realRAM/:idRealRAM", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})

router.get("/ultimasTEMP/:idTEMP", function (req, res) {
    medidaController.buscarUltimasMedidasTEMP(req, res);
});

router.get("/tempo-realTEMP/:idRealTEMP", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTEMP(req, res);
})

router.get("/ultimaDisco/:idArmazem", function (req, res) {
    medidaController.buscarUltimaMedidaDisco(req, res);
})

router.get("/ultimasRotulos/:idRotulos", function (req, res) {
    medidaController.UltimasMedidasRotulos(req, res);
});

router.get("/ultimasFases/:idFases", function (req, res) {
    medidaController.UltimasMedidasFases(req, res);
});


module.exports = router;