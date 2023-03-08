
const ProdutosModel = require('../models/ProdutoModel');

const HomeController = {
    showHomePage: (req,res)=> {
        
        console.log()
        return res.render("index", {itensMenorValor: ProdutosModel.findHomeMenorValor(), itensMaisRecentes: ProdutosModel.findHomeMaisRecentes()})
       
    },
    showConsultaProd:(req,res)=> {

        
        
        
        
        switch (req.params.parametro) {
            case "nome":
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByBome(req.query.txtBuscaProdutoNome)})
                
            case "todos":
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findAllProdutos()})
            
            case "lenovo": 
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByMarca(req.params.parametro)})
                            
            case "samsung":
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByMarca(req.params.parametro)})

            case "dell": 
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByMarca(req.params.parametro)})

            case "acer":
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByMarca(req.params.parametro)})

            case "CORE I3":
                return res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByProcessador(req.params.parametro)})

            case "CORE I5":
                return  res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByProcessador(req.params.parametro)})

            case "CORE I7":
                return  res.render("consultaProdutos", {itensPesquisados: ProdutosModel.findByProcessador(req.params.parametro)})

            default: 
                return  res.render("consultaProdutos", {itensPesquisados: undefined})

        }
        
       
        
        
        
        
    },
    showMeuCarrinho: (req, res)=>{
        return res.render("meuCarrinho", {clienteLogado: req.session.cliente})
    },
    showLogin:(req, res)=>{
        return res.render("login", {urlDestino: "undefined"})

        
    },
    showCadastro:(req, res)=>{
        return res.render("cadastro")
    },
    showItemVenda:(req, res)=>{

        let {id} = req.params
        
        console.log(ProdutosModel.findbyID(id))
        console.log(ProdutosModel.findComplementos())

        return res.render("itemVenda", {item: ProdutosModel.findbyID(id),complementos: ProdutosModel.findComplementos()} )
    },
    showHomeCliente:(req, res)=>{
        return res.render("homecliente", {clienteLogado: req.session.cliente})
    },
    showEditaMeuCadastro:(req, res)=>{
        return res.render("editameucadastro", {clienteLogado: req.session.cliente})
    },
    showMeusPedidos:(req, res)=>{
        return res.render("meuspedidos", {clienteLogado: req.session.cliente})
    },
    showHomeAdmin:(req, res)=> {
        return res.render("homeadmin", {adminLogado: req.session.usuarios})
    },
    showCadastroCliente: (req,res)=>{
        
        
        let size = Object.keys(req.body).length

        


        return res.send('deu certo')
    }

    
}


module.exports = HomeController

    