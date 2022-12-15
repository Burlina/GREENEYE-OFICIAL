const R = require("r-integration");
const shell = require("r-script")

function rdb(){
    shell(
     R.executeRScript("./Linguagens/R_Files/ConexãoPipe.R")
     ).callSync();
    }

    rdb();
