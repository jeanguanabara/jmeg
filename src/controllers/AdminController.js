const ProdutosModel = require('../database/ProdutoModel');
const Produtos = require('../models/Produtos')


const AdminController = {

    showAdmin: (req,res)=>{
        return res.render('admin', {error: '', admin: undefined})
    },

    showHomeAdmin: (req,res)=>{
      
        
        return res.render('homeAdmin', {admin: req.session.user})
    },

    showProdutosAdmin: async (req,res)=>  {


        return res.render("produtosAdmin", {admin: req.session.user, produto: await ProdutosModel.findAllProdutos()})
    },
    showCadastroProduto: (req,res)=> {


        return res.render("cadastroProduto" ,{admin: req.session.user})
    },
    showEditaCadItem: async (req,res)=> {
           
       
            
        return res.render("editaCadItemAdmin" ,{admin: req.session.user,  complementos: await ProdutosModel.findComplementos()})
    }
    ,
    showEditaCadItemID: async (req,res)=> {

        let {id} = req.params

        return res.render("editaCadItemAdminID" ,{admin: req.session.user, item: await ProdutosModel.findbyID(id),complementos: await ProdutosModel.findComplementos()})
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

        Produtos.update({
            nome: req.body.nomeProduto,
            descricao: req.body.textoProduto,
            valor: req.body.valorProduto,
            img: req.body.imagemProduto,
            id_marca: req.body.marcaProduto,
            id_processador: req.body.processadorProduto,
            id_ram: req.body.ramProduto,
            id_tela: req.body.telaProduto
        },
        {
            where: {
                id: req.params.id
            }
        })

        console.log(req.params.id)

        console.log(req.body)

        return res.redirect('/produtosadmin')
    },
    deletarProduto: async (req,res)=> {
        await Produtos.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.redirect('/produtosadmin')
    }





    

}


module.exports = AdminController

    


