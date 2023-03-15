const isClienteLogadoLogin = (req,res,next) => {
    //criado apenas para a tela de login do site, não passando a url como parâmetro
    if (req.session.cliente){
        


        return res.redirect('/homecliente')
    } else{
        console.log('Não existe session de cliente')
        return next()
    }
    
    

}


module.exports = isClienteLogadoLogin