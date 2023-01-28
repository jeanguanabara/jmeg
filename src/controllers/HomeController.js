const HomeController = {
    showHomePage: (req,res)=> {
        return res.render("index")
    },
    showConsultaProd:(req,res)=> {
        return res.render("consultaProdutos")
    },
    showMeuCarrinho: (req, res)=>{
        return res.render("meuCarrinho")
    }

    
}


module.exports = HomeController

    