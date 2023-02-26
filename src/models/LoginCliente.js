const db = require('../database/db.json');
const PassModel = require('../models/PassModel')


const LoginCliente =  {
    findEmail : (email)=>{
        
        for (let i in db.cliente){
            
           if(db.cliente[i].email === email){
           
            return true
           } 
        }
        return false
        
    },
    findSenha : (email,senha)=>{
        for (let i in db.cliente){
            
            if(db.cliente[i].email === email & PassModel.passValidation(senha,db.cliente[i].senha)){
                
             return true
            } 
         }
         return false
    },
    findCliente: (email) => db.cliente.find(elemento => elemento.email === email)

   
}





module.exports = LoginCliente