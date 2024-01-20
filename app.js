// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

//criar o middleware para receber os dadis no corpo da requisicao
app.use(express.json());

// Incluir as CONTROLLERS
const cliente = require("./controllers/cliente");

// Criar as rotas
app.use('/cliente', cliente);

// Iniciar o servidor utilizando funcao modelo Arrow function para retornar a mensagem de sucesso
app.listen(process.env.PORT, () => { 
    console.log('Servidor iniciado na porta' );
});