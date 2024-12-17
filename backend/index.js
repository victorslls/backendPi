
const express = require("express")
const app = express();
const port = 3000;
const router =  require('./routes/index');
const conexao = require("./infraestrutura/conexao")
const tabelas = require("./infraestrutura/tabelas")


tabelas.init(conexao)
router(app,express)


app.listen(port, (error)=> {
    if(error) {
        console.log("deu erro")
        return;
    }
    console.log("Subiu que foi")
} )