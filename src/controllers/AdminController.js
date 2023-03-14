const ProdutosModel = require('../database/ProdutoModel');

const AdminController = {

    showAdmin: (req,res)=>{
        return res.render('admin', {error: '', admin: undefined})
    },

    showHomeAdmin: (req,res)=>{

        
        return res.render('homeAdmin', {admin: req.session.user})
    },

    showProdutosAdmin: (req,res)=> {
        return res.render("produtosAdmin", {admin: req.session.user, produto: ProdutosModel.findAllProdutos()})
    },
    showCadastroProduto: (req,res)=> {


        return res.render("cadastroProduto" ,{admin: req.session.user})
    },
    showEditaCadItem: (req,res)=> {
        return res.render("editaCadItemAdmin" ,{admin: req.session.user})
    }
    ,
    showEditaCadItemID: (req,res)=> {

        let {id} = req.params

        return res.render("editaCadItemAdminID" ,{admin: req.session.user, item: ProdutosModel.findbyID(id),complementos: ProdutosModel.findComplementos()})
    }
    ,
    showLoginAdmin:(req, res)=>{
        return res.render("loginadmin", {urlDestino: "undefined"})

        
    },
    cadastrarProduto: (req,res)=> {
        return res.sender("cadastrou")
    },
    ataulizarProduto: (req,res)=> {
        return res.sender("cadastrou")
    }




    

}


module.exports = AdminController

    


