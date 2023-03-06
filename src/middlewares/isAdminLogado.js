const isAdminLogadoLogin = (req,res,next) => {
    
    if (req.session.admin){
        


        return res.redirect('/homeadmin')
    } else{
        console.log('Não existe session de admin')
        return next()
    }
    
    

}


module.exports = isAdminLogadoLogin