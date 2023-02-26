//IMPORTAÇÕES, TEM QUE IMPORTAR O EXPRESS E OS OUTROS MÓDULOS NESTE ARQUIVO
const express = require('express');//aqui importo o express que baixei
const path = require('path');//aqui importo o path que é nativo do node
const session  = require('express-session');//aqui importo o session
const homeRouter = require('./routes/home')
const adminRouter = require('./routes/admin')

//VARIÁVEIS, AQUI DEFINO AS VARIÁVEIS PARA TRABALHAR COM O BACK
const app = express(); //aqui puxo a função do express para a variável app
const port = 3000 //aqui é a porta que o servidor no backend vai rodar

//CONFIGURAÇÕES E MIDDLEWARES, AQUI COLOCO ALGUMAS CONFIGURAÇÕES DE COMO VAI FUNCIONAR ALGUNS DETALHES PARA TRABALHAR

app.set('view engine', 'ejs')//aqui digo que o express vai verificar uma engine que vai ler na extensão 'ejs'
app.set('views', path.resolve('src','views'))//aqui dps de importar tenho que dizer onde ta o arquivo das 'views', as views seriam os html's convertidos para ejs.
app.use(express.static(path.resolve('src','public')))//aqui puxo a pasta public para como estático para a raiz do servidor em execução, sendo assim no arquivo html(ejs) não preciso colocar '../public....arquivo'. Só colocar 'css/style.css' que já vai reconhecer.

app.use(session({
    secret: 'Jmeg Session',
    resave: false,
    saveUninitialized: true,
  }))



//ROTAS, AQUI DEFINO AS ROTAS DE APONTAMENTO CONFORME AS PÁGINAS DO SITE. TENHO QUE PUXAR AQUI LÁ DA PASTA ROUTES.
app.use(homeRouter)
app.use(adminRouter)
app.use((req,res,next)=> { //aqui página de não encontrado
    return res.status(404).render('notFound')
})



//LISTENING, POR FIM DIGO EM QUAL PORTA O EXPRESS VAI FICAR ESCUTANDO.
app.listen(port,()=> console.log(`Server listening on port ${port}`)) 


