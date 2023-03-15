
const PassModel = require('./PassModel')
const Cliente = require('../models/Cliente')


const LoginCliente =  {
    
    findEmail : async (email)=>{

        

        
        
        await Cliente.findAll()
        .then((rtn)=> {
            for (let i in rtn){
                
                if(rtn[i].dataValues.email === email){
                  
                 return true
                } 
             }
             return false
        })


        
        
    },
    findSenha : async (email,senha)=>{
       
        await Cliente.findAll()
        .then((rtn)=> {
            for (let i in rtn){
                
            
                if(rtn[i].dataValues.email === email & PassModel.passValidation(senha,rtn[i].dataValues.senha)){
                
                 return true
                } 
             }
             return false
        })
        
        
        
    },
    findCliente: async (email) => {
        await Cliente.findAll({
            where: {
                email: email
            }
        })
        .then((rtn) => {
            if (rtn.length > 0) {
                return rtn[0].dataValues
            } else {
                return undefined
            }

        })

        
    } 

   
}






module.exports = LoginCliente