const db = require('../database/db.json');



const Cliente =  {
    findEmail : (email)=>{
        let buscouEmail = db.cliente.find(elemento => elemento.email === email)
        return buscouEmail.email === email
    },
    findSenha : (email,senha)=>{
        let 
    }

   
}



console.log(Cliente.findEmail('mauroeckstein@hotmail.com'))