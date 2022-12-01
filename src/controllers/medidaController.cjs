var medidaModel = require("../models/medidaModel.cjs");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimasMedidasRAM(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasRAM(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealRAM(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealRAM(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTEMP(req, res) {

    var idAquario = req.params.idAquario;

    console.log("ID", idAquario);
    
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTEMP(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("RESULTADO", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasTEMP(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTEMP(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimaMedidaDisco(req, res){
    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimaMedidaDisco(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  UltimasMedidasRotulos(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasRotulos(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  UltimasMedidasFases(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasFases(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function  UltimasMedidasPrincipais(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasPrincipais(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function  UltimasMedidasGerais(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel. UltimasMedidasGerais(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasRAM,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealTEMP,
    buscarUltimasMedidasTEMP,
    UltimasMedidasRotulos,
    buscarUltimaMedidaDisco,
    UltimasMedidasFases,
    UltimasMedidasPrincipais,
    UltimasMedidasGerais
    
}