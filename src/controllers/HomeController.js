const HomeController = {
    showHomePage: (req,res)=> {
        return res.render("index")
    },
    showConsultaProd:(req,res)=> {
        return res.render("consultaProdutos")
    }
}


module.exports = HomeController

    