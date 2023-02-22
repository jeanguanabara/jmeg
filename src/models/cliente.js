const db = require('../database/db.json');



const Cliente =  {
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
            
            if(db.cliente[i].email === email & db.cliente[i].senha === senha){
             return true
            } 
         }
         return false
    },
    findCliente: (email) => db.cliente.find(elemento => elemento.email === email)

   
}



module.exports = Cliente