module.exports = (sequelize, DataType) => {
    const Produtos = sequelize.define('Produtos',{
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        descricao:DataType.TEXT,
        valor: DataType.DOUBLE,
        img: DataType.STRING,
        id_marca: DataType.INTERGER,
        id_processador:DataType.INTERGER,
        id_ram: DataType.INTERGER,
        id_tela: DataType.INTERGER
    },
    {
        tablename: 'produtos',
        timestamps: false
    })
}