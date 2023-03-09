module.exports = (sequelize,DataType) => {
    const Processador = sequelize.define('Processador', {
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        processador: DataType.STRING
    },
    {
        tableName: 'processador',
        timestamps: false
    }
    )
}