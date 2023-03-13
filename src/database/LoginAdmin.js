const db = require('./db.json');
const PassModel = require('./PassModel')

const user = db.usuarios


const loginAdmin =  {
    
    findEmail : (nome)=>{
        console.log("entrou no findnome")
        for (let i in user){
            
            
           if(user[i].nome == nome){
           
            return true
           } 
        }
        return false
        
    },
    findSenha : (nome,senha)=>{

        console.log("entrou no findSenha")

        for (let i in user){


            console.log("vai percorrer o for do findSenha")
            
            if(user[i].nome === nome & PassModel.passValidation(senha,user[i].senha)){
                console.log('nome e senha bateu')
                
             return true
            } 
         }
         console.log("senha não bateu")
         return false
    },
    findAdmin: (nome) => user.find(elemento => elemento.nome === nome)

   
}





module.exports = loginAdmin;