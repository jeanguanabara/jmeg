//MESMA FORMATAÇÃO, COMEÇA COM AS IMPORTAÇÕES
const express = require('express');//AQUI TENHO QUE IMPORTAR O EXPRESS, UMA VEZ QUE PRATICAMENTE TUDO DO BACK TA USANDO EXPRESS PARA PODER RODAR E N ADIANTAR DEIXAR TUDO NUM ARQUIVO SÓ QUE FICA UMA BAGUNÇA
const HomeController = require('../controllers/HomeController')

//VARIÁVEIS, MAS AQUI NA ROTA AO INVÉS DE SÓ COLOCAR APP = EXPRESS(), vai ser a função Router() que vou precisar
const router = express.Router();//Aqui puxo especificadamente a função Router() de dentro do express

//CRIAÇÃO DAS ROTAS
router.get('/', HomeController.showHomePage)//aqui eu digo que a rota quando vem de um get na página inicial, ele vai puxar uma função do controller onde terão todas essas configurações acopladas. Ficando muito mais fácil daí e mais simples aqui.
router.get('/ConsultaProd', HomeController.showConsultaProd)
router.get('/meuCarrinho', HomeController.showMeuCarrinho)
router.get('/login', HomeController.showLogin)
router.get('/cadastro', HomeController.showCadastro)
router.get('/itemvenda', HomeController.showItemVenda)
router.get('/homecliente', HomeController.showHomeCliente)
router.get('/editameucadastro', HomeController.showEditaMeuCadastro)

//POR FIM EXPORTO ESSA VARIÁVEL/FUNÇÃO ROUTER PARA IMPORTAR LÁ NO APP.JS
module.exports = router
