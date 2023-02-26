const AuthController = {
    loginCliente: (req, res) => {
        console.log('chegou aqui' + ' -AuthController')
        console.log(req.body)

        console.log(req.locals)

        res.redirect('/homeCliente')
        

    }
}


module.exports = AuthController