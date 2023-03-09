module.exports = (sequelize,DataType) => {
    const Ram = sequelize.define('Ram', {
        id: {
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        ram: DataType.STRING
    },
    {
        tableName: 'ram',
        timestamps: false
    }
    )
}