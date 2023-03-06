const AuthController = {
    loginCliente: (req, res) => {
        console.log('chegou aqui' + ' -AuthController')
        console.log(req.body)

        console.log(req.locals)

        res.redirect('/homeCliente')
        

    },
     loginAdmin: (req, res) => {
        console.log('chegou aqui' + ' -AuthController')
        console.log(req.body)

        console.log(req.locals)

        res.redirect('/homeAdmin')
        

    }
   
}


module.exports = AuthController