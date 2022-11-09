var database = require("../database/config.cjs");

function buscarUltimasMedidas(id, limite_linhas) {

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
            `select cpuMedia, dataHora from Leitura order by idLeitura`

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

function buscarUltimasMedidasRAM(id, limite_linhas) {

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
            `select ramUsoPercent, dataHora from Leitura order by idLeitura`

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
            `select top 1 cpuMedia, dataHora from Leitura order by idLeitura`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */

            `select cpuMedia, dataHora, date_format(dataHora, '%H:%i') as horarioF 
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
            `select top 1 ramUsoPercent, dataHora from Leitura order by idLeitura`

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
    buscarUltimaMedidaDisco
}