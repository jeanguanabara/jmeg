const db = require('./db.json');



const Admin =  {
    findEmail : (email)=>{
        
        for (let i in db.usuarios){
            
           if(db.usuarios[i].email === email){
            return true
           } 
        }
        return false
        
    },
    findSenha : (email,senha)=>{
        for (let i in db.usuarios){
            
            if(db.usuarios[i].email === email & db.usuarios[i].senha === senha){
             return true
            } 
         }
         return false
    },
    findAdmin: (email) => db.usuarios.find(elemento => elemento.email === email)

   
}



module.exports = Admin