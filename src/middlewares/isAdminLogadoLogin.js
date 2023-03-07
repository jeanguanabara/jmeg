const isAdminLogadoLogin = (req,res,next) => {
    
    if (req.session.usuarios){
        


        return res.redirect('/homeAdmin')
    } else{
        console.log('Não existe session de admin')
        return next()
    }
    
    

}


module.exports = isAdminLogadoLogin