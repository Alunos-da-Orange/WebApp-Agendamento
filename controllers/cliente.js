// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");

// Testar conexão com banco de dados
const db = require("../db/models");

// Chamar a função `Router` do express
const router = express.Router();

// Criar a rota visualizar com método get
//async para usar await
router.get("/", async (req, res) => {
    //await para o processamento para recuperar registros no banco de dados
    //res.send("Conteúdo da página Cliente");

    // Buscar apenas um registro no banco de dados
    // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findone
    //const clientes =  await db.Clientes.findOne({
    const clientes =  await db.Clientes.findAll({
        // Indicar quais colunas recuperar
        // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries
        attributes: ["nome", "email", "sobrenome", "contato"],    
        
        //acrescentar condicao para indicar qual registro sera retornado do banco de dados
        // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses
        //where: { id: 100 } // Provocando erro para testar condição else da verificao `Clientes`
    });

    //console.log(clientes);
    
    //verificar se existe registros no banco de dados
    if ((clientes)) {
        //return pra parar processamento
        return res.json({
            //hove erro? false
            error: false,
            //retorne o que tiver em clientes
            clientes      
        });
    } else {
        //status 400 indicando erro //padrao status(200)
        return res.status(400).json({ 
            //hove erro? false
            error: true, //erro nao obrigatorio colocar
            //retorne o que tiver em clientes
            message: "Não encontrado conteúdo do cliente!"
        });
    }
});

// Exportar a instrução que está dentro da constante router 
module.exports = router;