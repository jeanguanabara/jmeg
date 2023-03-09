module.exports = (sequelize,DataType) => {
    const Pedido = sequelize.define('Pedido',{
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente: DataType.INTERGER,
        total: DataType.DOUBLE
    },
    {
        tableName: 'pedido',
        timestamps: false
    }
    )
    
    
}