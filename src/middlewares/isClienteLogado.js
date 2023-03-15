

const isCliente = (req,res,next)=> {

    

    if (req.session.cliente){
        


        return next()
    } else{
        console.log('Não existe session de cliente')
        console.log(req.url)
        return res.render('login', {urlDestino: req.url})
    }
    
    

}

module.exports = isCliente




