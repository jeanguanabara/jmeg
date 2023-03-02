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
const isClienteLogadoLogin = require('../middlewares/isClienteLogadoLogin')


//CRIAÇÃO DAS ROTAS
router.get('/', HomeController.showHomePage)//aqui eu digo que a rota quando vem de um get na página inicial, ele vai puxar uma função do controller onde terão todas essas configurações acopladas. Ficando muito mais fácil daí e mais simples aqui.
router.get('/ConsultaProd', HomeController.showConsultaProd)
router.post('/homecliente',VerificaLoginClienteMiddlaware, AuthController.loginCliente)
router.get('/itemvenda', HomeController.showItemVenda)


router.get('/homecliente',isClienteLogado, HomeController. showHomeCliente)
router.get('/meucarrinho',isClienteLogado,  HomeController.showMeuCarrinho)
router.get('/login',isClienteLogadoLogin,  HomeController.showLogin)
router.get('/cadastro', isClienteLogado, HomeController.showCadastro)
router.get('/homecliente',isClienteLogado,  HomeController.showHomeCliente)
router.get('/editameucadastro',isClienteLogado,  HomeController.showEditaMeuCadastro)
router.get('/meuspedidos',isClienteLogado,  HomeController.showMeusPedidos)


//

//POR FIM EXPORTO ESSA VARIÁVEL/FUNÇÃO ROUTER PARA IMPORTAR LÁ NO APP.JS
module.exports = router
