const database = require('./db.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "db.json");

const produtosModel = {
    //Método que procura todos os produtos do banco de dados
    findAll: () => {
        return database.produtos;
    },

    //Método que procura um produto
    findByPk: (id) => {
        const produto = database.produtos.find(produto => produto.id === id);
        return produto;
    },

    //Método que criar um produto no banco de dados
    create: (produto) => {
        database.produtos.push(produto);

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf8");
    },

    //Método que atualizar um produto no banco de dados
    update: (id, produto) => {},

    //Metodo que deleta um produto no banco de dados
    delete: (id) => {}
}
