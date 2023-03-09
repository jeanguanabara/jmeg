module.exports = (sequelize,DataType) => {
    const Marca = sequelize.define('Marca', {
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: DataType.STRING
    },
    {
        tableName: 'marca',
        timestamps: false
    }
    )
}