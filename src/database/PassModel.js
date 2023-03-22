const bcryptjs = require('bcryptjs');

const PassModel = { 
    passCrypt : (pass)=> {
        return bcryptjs.hashSync(pass,10) //aqui vai retornar a senha criptografada parra armazenamento no banco
    },
    passValidation: (pass,passBd)=> {
        return bcryptjs.compareSync(pass,passBd)//aqui vai comprar se a senha informada confere com a criptografada no banco
    }
}


console.log(PassModel.passValidation("124","$2a$10$4Dfvnt0KolUTRe0FMDAwkOLFgWrM2EVue2oVbH2SgR6IpPxZm9cIS"))

module.exports = PassModel