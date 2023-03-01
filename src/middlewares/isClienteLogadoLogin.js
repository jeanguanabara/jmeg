const isClienteLogadoLogin = (req,res,next) => {
    
    if (req.session.cliente){
        


        return res.redirect('/homecliente')
    } else{
        console.log('Não existe session de cliente')
        return next()
    }
    
    

}


module.exports = isClienteLogadoLogin