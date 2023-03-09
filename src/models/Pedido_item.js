module.exports = (sequelize, DataType) => {
    const Pedido_item = sequelize.define('Pedido_item',{
        id_pedido: DataType.INTERGER,
        id_produto: DataType.INTERGER,
        qnt: DataType.INTERGER,
        total: DataType.DOUBLE
    },
    {
        tablename: 'pedido_item',
        timestamps: false
    })
}