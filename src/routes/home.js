//MESMA FORMATAÇÃO, COMEÇA COM AS IMPORTAÇÕES
const express = require('express');//AQUI TENHO QUE IMPORTAR O EXPRESS, UMA VEZ QUE PRATICAMENTE TUDO DO BACK TA USANDO EXPRESS PARA PODER RODAR E N ADIANTAR DEIXAR TUDO NUM ARQUIVO SÓ QUE FICA UMA BAGUNÇA
const HomeController = require('../controllers/HomeController')
const AuthController = require('../controllers/AuthController')

// const isLogin = require('../middlewares/isCliente')

//VARIÁVEIS, MAS AQUI NA ROTA AO INVÉS DE SÓ COLOCAR APP = EXPRESS(), vai ser a função Router() que vou precisar
const router = express.Router();//Aqui puxo especificadamente a função Router() de dentro do express


//MIDDLEWARES
const VerificaLoginClienteMiddlaware = require('../middlewares/VerificaLoginCliente')

const isClienteLogado = require('../middlewares/isClienteLogado')
const isClienteLogadoLogin = require('../middlewares/isClienteLogadoLogin');

const VerificaCadastroClienteMiddleware = require('../middlewares/VerificaCadastroCliente')



//CRIAÇÃO DAS ROTAS
router.get('/', HomeController.showHomePage)//aqui eu digo que a rota quando vem de um get na página inicial, ele vai puxar uma função do controller onde terão todas essas configurações acopladas. Ficando muito mais fácil daí e mais simples aqui.
router.get('/consultaprod/:parametro', HomeController.showConsultaProd)
router.get('/cadastro', HomeController.showCadastro)
router.post('/cadastrarCliente', VerificaLoginClienteMiddlaware, VerificaCadastroClienteMiddleware,HomeController.showCadastroCliente)
router.post('/homecliente',VerificaLoginClienteMiddlaware,  AuthController.loginCliente)
router.get('/itemvenda/:id', HomeController.showItemVenda)


//aqui verifica as rotas de post da tela de login para poder continuar de onde parou
router.post('/homecliente',VerificaLoginClienteMiddlaware, VerificaCadastroClienteMiddleware,isClienteLogado, AuthController.loginCliente)
router.post('/meucarrinho',VerificaLoginClienteMiddlaware,isClienteLogado, HomeController.showMeuCarrinho)
router.post('/login',isClienteLogadoLogin, HomeController.showLogin)

router.post('/homecliente',VerificaLoginClienteMiddlaware,isClienteLogado, HomeController.showHomeCliente)
router.post('/editameucadastro',VerificaLoginClienteMiddlaware,isClienteLogado, HomeController.showEditaMeuCadastro)
router.post('/meuspedidos',VerificaLoginClienteMiddlaware,isClienteLogado, HomeController.showMeusPedidos)
router.post('/purchaseItem/:id',VerificaLoginClienteMiddlaware,isClienteLogado,HomeController.purchaseItem)

//aqui verifica as rotas get's que o cliente precisa estar logado, se n estiver vai jogar pra página de login para vir um post com a rota para essa aqui de cima

router.get('/homecliente',isClienteLogado, HomeController. showHomeCliente)
router.get('/meucarrinho',isClienteLogado,  HomeController.showMeuCarrinho)
router.get('/login',isClienteLogadoLogin,  HomeController.showLogin)

router.get('/homecliente',isClienteLogado,  HomeController.showHomeCliente)
router.get('/editameucadastro',isClienteLogado,  HomeController.showEditaMeuCadastro)
router.get('/meuspedidos',isClienteLogado,  HomeController.showMeusPedidos)
router.get('/purchaseItem/:id',isClienteLogado,HomeController.purchaseItem)
router.get('/removeItemCarrinho/:id', isClienteLogado,HomeController.removeItem)


//

//POR FIM EXPORTO ESSA VARIÁVEL/FUNÇÃO ROUTER PARA IMPORTAR LÁ NO APP.JS
module.exports = router
