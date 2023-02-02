const AdminController = {
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

    
}


module.exports = AdminController

    


