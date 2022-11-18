var database = require("../database/config.cjs");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 cpuMedia, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit ${limite_linhas}` */
            instrucaoSql = `select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF from Leitura order by idLeitura desc limit ${limite_linhas}`;
        // instrucaoSql = 

        // `select cpuMedia, ramUsoPercent, 
        //  date_format(dataHora, '%H:%i:%s') as momento_grafico 
        //  from Leitura 
        //  order by date_format(dataHora, '%H:%i:%s') limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasRAM(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 ramUsoPercent, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

 `select cpuMedia, ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF from Leitura order by idLeitura desc limit ${limite_linhas}`;

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
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 cpuMedia, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select cpuMedia, ramUsoPercent dataHora, date_format(dataHora, '%H:%i') as horarioF 
    from Leitura order by idLeitura desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRAM(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 ramUsoPercent, dataHora, convert(varchar, dataHora, 108) as horarioF from Leitura order by idLeitura desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
            
    `select ramUsoPercent, dataHora, date_format(dataHora, '%H:%i') as horarioF 
    from Leitura order by idLeitura desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTEMP(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura order by id desc;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
    REGISTRO_TEMP, 
    REGISTRO_UMID, 
    REGISTRO_MOMENTO,
    date_format(momento, '%H:%i:%s') as momento_grafico
from registros  
order by idRegistros desc limit ${limite_linhas}` */

 `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura order by id desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMP(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;
            `select top 12 tempValor, hora_agr, convert(varchar, hora_agr, 108) as horaTemp from Temperatura order by id desc`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select tempValor, hora_agr, date_format(hora_agr, '%H:%i') as horaTemp from Temperatura order by id desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaMedidaDisco(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =
            //     `select top 1 
            //     REGISTRO_TEMP, 
            //     REGISTRO_UMID, 
            //     REGISTRO_MOMENTO,
            //     CONVERT(varchar, REGISTRO_MOMENTO, 108) as momento_grafico
            // from registros  
            // order by idRegistros desc`;

            `select top 1 discoPercent from Leitura order by idLeitura desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
            `select discoPercent from Leitura order by idLeitura desc limit 1;`;
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
    buscarUltimasMedidasRAM,
    buscarMedidasEmTempoRealRAM,
    buscarUltimasMedidasTEMP,
    buscarMedidasEmTempoRealTEMP,
    buscarUltimaMedidaDisco
}