module.exports = (sequelize, DataType) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type:           DataType.INTEGER,
            primaryKey:     true,
            autoIncrement:  true
        },
        nome: DataType.STRING,
        cpf: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING,
        id_end: DataType.INTEGER 
    },
    {
        tableName: 'cliente',
        timestamps: false
    })
}