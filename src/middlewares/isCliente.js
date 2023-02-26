const isCliente = (req,res,next)=> {

    console.log(req.session)
    console.log (req.session.cliente)
    if (req.session.cliente) {
        res.locals.cliente = req.session.cliente
        return next()
    }

    console.log('não logado')
    return res.render ('login' , {urlNext: req.url})

}

module.exports = isCliente




