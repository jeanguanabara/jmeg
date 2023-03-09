module.exports = (sequelize,DataType) => {
    const Endereco = sequelize.define('Endereco',{

    
    id:{
        type: sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true
    },
    cep: DataType.STRING,
    logradouro: DataType.STRING,
    numero: DataType.STRING,
    complemento: DataType.STRING,
    bairro: DataType.STRING,
    cidade: DataType.STRING,
    uf: DataType.STRING
    },
    {
        tableName: 'endereco',
        timestamp:false
    }

    )
}