module.exports = (sequelize,DataType) => {
    const Tela = sequelize.define('Tela', {
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        tela: DataType.STRING
    },
    {
        tableName: 'tela',
        timestamps: false
    }
    )
}