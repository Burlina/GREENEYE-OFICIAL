// var database = require("../database/config.cjs");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top ${limite_linhas}
//         REGISTRO_TEMP, 
//         REGISTRO_UMID, 
//         REGISTRO_MOMENTO,
//         CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
//     from registros  
//     order by idRegistros desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select cpuMedia, 
//         date_format(dataHora, '%H:%i:%s') as momento_grafico 
//         from Leitura 
//         order by date_format(dataHora, '%H:%i:%s') limit ${limite_linhas}`;

//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


// function buscarMedidasEmTempoReal(idAquario) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1 
//         REGISTRO_TEMP, 
//         REGISTRO_UMID, 
//         REGISTRO_MOMENTO,
//         CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
//     from registros  
//     order by idRegistros desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         let coleta = ""
//         if (idAquario == 1) {
//             coleta = "cpuMedia"
//         }
//         else if (idAquario == 2) {
//             coleta = "ramUsoPercent"
//         }

//         instrucaoSql = `select 
//         ${coleta}, 
//         date_format(dataHora, '%H:%i:%s') as momento_grafico 
//     from Leitura  
//     order by idLeitura desc limit 1`;

//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal1(idMemoria) {

//     instrucaoSql1 = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1 
//         REGISTRO_TEMP, 
//         REGISTRO_UMID, 
//         REGISTRO_MOMENTO,
//         CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
//     from registros  
//     order by idRegistros desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select ramUsoPercent, 
//         date_format(dataHora, '%H:%i:%s') as momento_grafico 
//     from Leitura  
//     order by date_format(dataHora, '%H:%i:%s') desc limit 1`;

//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql1);
//     return database.executar(instrucaoSql1);
// }


// module.exports = {
//     buscarUltimasMedidas,
//     buscarMedidasEmTempoReal
// }

var database = require("../database/config.cjs");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
    from registros  
    order by idRegistros desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit ${limite_linhas}` */
    // `select cpuPercent, ramPercent,mbDownload, mbUpload, horario, date_format(horario, '%H:%i') as horarioF from Leitura order by idLeitura desc limit ${limite_linhas}`;
    // instrucaoSql = 
    
    `select cpuMedia, ramUsoPercent, 
//         date_format(dataHora, '%H:%i:%s') as momento_grafico 
//         from Leitura 
//         order by date_format(dataHora, '%H:%i:%s') limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
    from registros  
    order by idRegistros desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from Leitura order by idLeitura desc limit 1`;

    //     let coleta = ""
    //     if (idAquario == 1) {
    //         coleta = "cpuMedia"
    //     } else if (idAquario == 2) {
    //         coleta = "ramUsoPercent"
    //     } else if (idAquario == 3) {
    //         coleta = "discoPercent"
    //     }

    //     instrucaoSql = `select 
    //     ${coleta}, 
    //     date_format(dataHora, '%H:%i:%s') as momento_grafico 
    // from Leitura  
    // order by idLeitura desc limit 1`;
} else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaMedidaDisco(idAquario){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
    from registros  
    order by idRegistros desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select diskPercent from Leitura order by idLeitura desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimaMedidaDisco
}