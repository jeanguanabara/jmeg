const AdminController = {
<<<<<<< HEAD
    showAdminCadastro: (req,res)=> {
        return res.render("adminCadastro")
    },
=======
    showHomeAdmin: (req,res)=>{
        return res.render('homeAdmin')
    },

    showProdutosAdmin: (req,res)=> {
        return res.render("produtosAdmin")
    },
    showCadastroProduto: (req,res)=> {
        return res.render("cadastroProduto")
    },
    showEditaCadItem: (req,res)=> {
        return res.render("editaCadItemAdmin")
    }
>>>>>>> 4ee8c1bf681d1d742697ee3429a2624636913f62

    
}


module.exports = AdminController

    


