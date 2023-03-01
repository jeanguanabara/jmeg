const database = require('./db.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "db.json");

const productsModel = {
    //Método que procura todos os produtos do banco de dados
    findAll: () => {
        return database.products;
    },

    //Método que procura um produto
    findByPk: (id) => {
        const product = database.products.find(product => product.id === id);
        return product;
    },

    //Método que criar um produto no banco de dados
    create: (product) => {
        database.products.push(product);

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf8");
    },

    //Método que atualizar um produto no banco de dados
    update: (id, product) => {},

    //Metodo que deleta um produto no banco de dados
    delete: (id) => {}
}

module.exports = productsModel;