module.exports = (sequelize, DataType) => {
    const Usuarios = sequelize.define('Usuarios',{
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        senha: DataType.STRING
    },
    {
        tablename:'usuarios',
        timestamps: false
    })
}