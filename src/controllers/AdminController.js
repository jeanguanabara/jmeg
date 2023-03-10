const AdminController = {

    showAdmin: (req,res)=>{
        return res.render('admin', {error: ''})
    },

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
    },
    showLoginAdmin:(req, res)=>{
        return res.render("loginAdmin", {urlDestino: "undefined"})

        
    }


    
}


module.exports = AdminController

    


