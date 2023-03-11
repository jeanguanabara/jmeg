const isAdminLogado = (req,res,next) => {
    
    if (req.session.usuarios){
        


        return res.redirect('/homeadmin')
    } else{
        console.log('Não existe session de admin')
        return next()
    }
    
    

}


module.exports = isAdminLogado
