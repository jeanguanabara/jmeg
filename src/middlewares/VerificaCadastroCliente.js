const VerificaCadastroCliente = (req,res,next) => {
    
    let contador = Object.keys(req.body).length

    if (contador == 12){
    
    
    const dadosCliente = req.body
    console.log(dadosCliente)
    next()
    }else if (contador == 2){
        next()
    }
}

module.exports = VerificaCadastroCliente