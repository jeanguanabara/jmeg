const db = require('../database/db.json');
const PassModel = require('../models/PassModel')


const loginAdmin =  {
    
    findEmail : (email)=>{
        console.log(email + "email informado")
        for (let i in db.cliente){
            
           if(db.usuarios[i].email === email){
           
            return true
           } 
        }
        return false
        
    },
    findSenha : (email,senha)=>{
        for (let i in db.usuarios){
            
            if(db.usuarios[i].email === email & PassModel.passValidation(senha,db.usuarios[i].senha)){
                console.log('email e senha bateu')
                
             return true
            } 
         }
         return false
    },
    findAdm: (email) => db.usuarios.find(elemento => elemento.email === email)

   
}





module.exports = loginAdmin;