const AuthController = {
    loginCliente: (req, res) => {
        

        res.redirect('/homeCliente')
        

    },
     loginAdmin: (req, res) => {
    

        res.redirect('/homeAdmin')
        

    }
   
}


module.exports = AuthController