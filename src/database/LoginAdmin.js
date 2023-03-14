
const PassModel = require('./PassModel')

const Usuarios = require('../models/Usuarios')









const loginAdmin =  {
    
    findEmail : async (nome)=>{

        let user = new Array


        await Usuarios.findAll()
        .then((rtn)=> {
            for (i in rtn){
                user.push(rtn[i].dataValues)
            }
        })
        
        for (let i in user){
            
            
           if(user[i].nome == nome){
           
            return true
           } 
        }
        return false
        
    },
    findSenha : async (nome,senha)=>{

        
        let user = new Array


        await Usuarios.findAll()
        .then((rtn)=> {
            for (i in rtn){
                user.push(rtn[i].dataValues)
            }
        })

        for (let i in user){


            
            
            if(user[i].nome === nome & PassModel.passValidation(senha,user[i].senha)){
                
                
             return true
            } 
         }
         
         return false
    },
    findAdmin: async (nome) => {

        let user = new Array


        await Usuarios.findAll()
        .then((rtn)=> {
            for (i in rtn){
                user.push(rtn[i].dataValues)
            }
        })

        user.find(elemento => elemento.nome === nome)
    } 

   
}





module.exports = loginAdmin;