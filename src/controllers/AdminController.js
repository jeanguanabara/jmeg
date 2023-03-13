const AdminController = {

    showAdmin: (req,res)=>{
        return res.render('admin', {error: ''})
    },

    showHomeAdmin: (req,res)=>{
        return res.render('homeAdmin', {admin: req.session.user})
    },

    showProdutosAdmin: (req,res)=> {
        return res.render("produtosAdmin")
    },
    showCadastroProduto: (req,res)=> {
        return res.render("cadastroProduto")
    },
    showEditaCadItem: (req,res)=> {
        return res.render("editaCadItemAdmin")
    },
    showLoginAdmin:(req, res)=>{
        return res.render("loginadmin", {urlDestino: "undefined"})

        
    }


    
    
}


module.exports = AdminController

    


