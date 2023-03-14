const ProdutosModel = require('../database/ProdutoModel');
const Produtos = require('../models/Produtos')


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
    showEditaCadItem: async (req,res)=> {
           
       
            
        return res.render("editaCadItemAdmin" ,{admin: req.session.user,  complementos: await ProdutosModel.findComplementos()})
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
    cadastrarProduto: async (req,res)=> {

        await Produtos.create({
            nome: req.body.nomeProduto,
            descricao: req.body.textoProduto,
            valor: req.body.valorProduto, 
            img: req.body.imagemProduto,
            id_marca: req.body.marcaProduto,
            id_processador: req.body.processadorProduto,
            id_ram: req.body.ramProduto,
            id_tela: req.body.telaProduto
        })

        

        return res.redirect('/produtosadmin')
    },
    ataulizarProduto: (req,res)=> {
        return res.sender("cadastrou")
    }




    

}


module.exports = AdminController

    


