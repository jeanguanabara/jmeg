
const ProdutosModel = require('../database/ProdutoModel');

const HomeController = {
    showHomePage: async (req,res)=> {
        
        
        return res.render("index", {itensMenorValor: await ProdutosModel.findHomeMenorValor(), itensMaisRecentes: await ProdutosModel.findHomeMaisRecentes()})
       
    },
    showConsultaProd:async (req,res)=> {

        
        
        
        
        switch (req.params.parametro) {
            case "nome":
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByBome(req.query.txtBuscaProdutoNome)})
                
            case "todos":
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findAllProdutos()})
            
            case "lenovo": 
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByMarca(req.params.parametro)})
                            
            case "samsung":
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByMarca(req.params.parametro)})

            case "dell": 
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByMarca(req.params.parametro)})

            case "acer":
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByMarca(req.params.parametro)})

            case "CORE I3":
                return res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByProcessador(req.params.parametro)})

            case "CORE I5":
                return  res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByProcessador(req.params.parametro)})

            case "CORE I7":
                return  res.render("consultaProdutos", {itensPesquisados: await ProdutosModel.findByProcessador(req.params.parametro)})

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
    showItemVenda: async (req, res)=>{

        let {id} = req.params
        
        

        return res.render("itemVenda", {item: await ProdutosModel.findbyID(id),complementos: await ProdutosModel.findComplementos()} )
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

    