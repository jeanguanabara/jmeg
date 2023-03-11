const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    database: 'jmeg',
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    use_env_variable: DATABASE_URL
    
}