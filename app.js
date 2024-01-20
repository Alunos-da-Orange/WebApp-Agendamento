// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

//criar o middleware para receber os dadis no corpo da requisicao
app.use(express.json());

// Testar conexão com banco de dados
// Comentada por estar sendo chamada na controler especifica
const db = require("./db/models");

// Incluir as CONTROLLERS
const cliente = require("./controllers/cliente");

// Criar as rotas
app.use('/cliente', cliente);

// Iniciar o servidor utilizando funcao modelo Arrow function para retornar a mensagem de sucesso
app.listen(process.env.PORT, () => { 
    console.log('Servidor iniciado na porta' );
});

/*app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/cliente");
});*/