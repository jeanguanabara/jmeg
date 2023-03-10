//MESMA FORMATAÇÃO, COMEÇA COM AS IMPORTAÇÕES
const express = require("express"); //AQUI TENHO QUE IMPORTAR O EXPRESS, UMA VEZ QUE PRATICAMENTE TUDO DO BACK TA USANDO EXPRESS PARA PODER RODAR E N ADIANTAR DEIXAR TUDO NUM ARQUIVO SÓ QUE FICA UMA BAGUNÇA
const AdminController = require("../controllers/AdminController");
const isAdmin = require("../middlewares/isAdmin");

//VARIÁVEIS, MAS AQUI NA ROTA AO INVÉS DE SÓ COLOCAR APP = EXPRESS(), vai ser a função Router() que vou precisar
const router = express.Router(); //Aqui puxo especificadamente a função Router() de dentro do express

//MIDDLEWARE
const VerificaLoginAdminMiddlaware = require("../middlewares/VerificaLoginAdmin");

//CRIAÇÃO DAS ROTAS

router.get("/admin", AdminController.showAdmin);
router.post(
  "/homeadmin",
  VerificaLoginAdminMiddlaware,
  AdminController.showHomeAdmin
);
router.use(isAdmin);
router.get("/homeadmin", AdminController.showHomeAdmin);

router.get("/produtosadmin", AdminController.showProdutosAdmin);
router.get("/cadastroproduto", AdminController.showCadastroProduto);
router.get("/editacaditem", AdminController.showEditaCadItem);
router.get("/editacaditem/:id", AdminController.showEditaCadItemID);
router.post("/cacadastrarItem", AdminController.cadastrarProduto);
router.post("/atualizarItem/:id", AdminController.ataulizarProduto);
router.get("/deletarItem/:id", AdminController.deletarProduto);

//POR FIM EXPORTO ESSA VARIÁVEL/FUNÇÃO ROUTER PARA IMPORTAR LÁ NO APP.JS
module.exports = router;
