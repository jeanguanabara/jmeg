module.exports = (sequelize,DataType) => {
    const Endereco = sequelize.define('Endereco',{

    
    id:{
        type: sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true
    },
    cep: {
        type: DataType.STRING
    },
    logradouro: {
        type: DataType.STRING
    },
    numero: {
        type: DataType.STRING
    },
    complemento: {
        type: DataType.STRING
    },
    bairro: {
        type: DataType.STRING
    },
    cidade: {
        type: DataType.STRING
    },
    uf: {
        type: DataType.STRING
    }
    },
    {
        tableName: 'endereco',
        timestamp:false
    }

    )

    return Endereco
}