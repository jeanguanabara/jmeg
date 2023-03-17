const { Op } = require("sequelize");
const ProdutosModel = require("../database/ProdutoModel");
const Pedido_itens = require("../models/Pedido_itens");
const Pedido = require("../models/Pedido");
const Produtos = require("../models/Produtos");
const Cliente = require("../models/Cliente")
const Endereco = require("../models/Endereco")

const HomeController = {
  showHomePage: async (req, res) => {
    return res.render("index", {
      itensMenorValor: await ProdutosModel.findHomeMenorValor(),
      itensMaisRecentes: await ProdutosModel.findHomeMaisRecentes(),
    });
  },
  showConsultaProd: async (req, res) => {
    switch (req.params.parametro) {
      case "nome":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByBome(
            req.query.txtBuscaProdutoNome
          ),
        });

      case "todos":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findAllProdutos(),
        });

      case "lenovo":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByMarca(
            req.params.parametro
          ),
        });

      case "samsung":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByMarca(
            req.params.parametro
          ),
        });

      case "dell":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByMarca(
            req.params.parametro
          ),
        });

      case "acer":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByMarca(
            req.params.parametro
          ),
        });

      case "CORE I3":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByProcessador(
            req.params.parametro
          ),
        });

      case "CORE I5":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByProcessador(
            req.params.parametro
          ),
        });

      case "CORE I7":
        return res.render("consultaProdutos", {
          itensPesquisados: await ProdutosModel.findByProcessador(
            req.params.parametro
          ),
        });

      default:
        return res.render("consultaProdutos", { itensPesquisados: undefined });
    }
  },
  showMeuCarrinho: async (req, res) => {
    let pedido = 0; // AQUI CRIO A VARIÁVEL PEDIDO PRA SALVAR O NÚMERO DO PEDIDO DO CLIENTE EM ABERTO
    let produto_id = new Array(); //AQUI CRIO A VARIÁVEL PRODUTO_ID QUE VAI SER UM ARRAY ONDE VAI SALVAR OS ID'S DE PRODUTOS QUE ESTÃO NO CARRINHO EM ABERTO
    let pedido_item = new Array();
    let produtos = new Array(); // AQUI CRIO A VARIÁVEL DOS PRODUTOS QUE VAI TRAZER TODOS OS PRODUTOS QUE ESTARÃO INCLUSOS NO CARRINHO EM ABERTO

    let consultaPedido = await Pedido.findAll({
      // AQUI CRIEI UMA VARÁVEL QUE CONSULTA NO BANCO E RETORNA O NÚMERO DO PEDIDO EM ABERTO PARA SALVAR NA VARÁVEL PEDIDO
      where: {
        id_cliente: req.session.cliente.id,
        finalizado: "N",
      },
    }).then((rtn) => {
      if (rtn.length > 0) {
        pedido = rtn[0].dataValues.id; // AQUI SALVO O ID  DESSE PEDIDO EM ABERTO
        return pedido;
      } else {
        return undefined;
      }
    });
    await consultaPedido; // AQUI EXECUTO ESSA VARIÁVEL DE CIMA
    if (typeof (await consultaPedido) !== "undefined") {
      let consultaPedidoItens = await Pedido_itens.findAll({
        // AQUI CRIO A VARÁVEL QUE CONSULTA NO BANCO E TRÁS OS ITENS DO PEDIDO EM ABERTO
        where: {
          id_pedido: pedido,
        },
      }).then((rtn) => {
        for (i in rtn) {
          produto_id.push(rtn[i].dataValues.id_produto); // AQUI SALVO O ID DOS PRODUTOS DESSA VARÁVEL NO ARRAY DOS PRODUTOS_ID
          pedido_item.push(rtn[i].dataValues); // AQUI SALVO CADA LANÇAMENTO DE ITEM EM ABERTO
        }
      });

      await consultaPedidoItens; // AQUI EXECUTO ESSA VARIÁVEL DE CIMA

      let consultaProduto = await Produtos.findAll({
        // AQUI CRIO A VARÁVEL QUE VAI ME TRAZER A CONSULTA APENAS DOS PRODUTOS QUE ESTÃO DENTRO DO PEDIDO EM ABERTO
        where: {
          id: {
            [Op.in]: produto_id, //COLOCANDO ESSA CONFIG EU PASSO O ARRAY DE ID'S QUE QUERO QUE VERIFIQUE
          },
        },
      }).then((rtn) => {
        for (i in rtn) {
          produtos.push(rtn[i].dataValues); //AQUI DPS DE TRAZER SOMENTE ESSES ITENS EU SALVO ELES NESSA VARIÁVEL PRODUTOS
        }
      });

      await consultaProduto; //AQUI EXECUTO ESSA VARIÁVEL AÍ DE CIMA

      

      return res.render("meuCarrinho", {
        clienteLogado: req.session.cliente,
        pedido_itens: pedido_item,
        produtos: produtos,
      });
    } else {
      return res.render("meuCarrinho", {
        clienteLogado: req.session.cliente,
        pedido_itens: undefined,
        produtos: undefined,
      });
    }
  },

  showLogin: (req, res) => {
    return res.render("login", { urlDestino: "undefined" });
  },
  showCadastro: (req, res) => {
    return res.render("cadastro");
  },
  showItemVenda: async (req, res) => {
    let { id } = req.params;

    return res.render("itemVenda", {
      item: await ProdutosModel.findbyID(id),
      complementos: await ProdutosModel.findComplementos(),
    });
  },
  showHomeCliente: (req, res) => {


    return res.render("homecliente", { clienteLogado: req.session.cliente });
  },
  showEditaMeuCadastro: async (req, res) => {
    
    let consultaEndereco = await Endereco.findAll({
      where: {
        id: req.session.cliente.id_end,
      }
    })
    .then((rtn) => {
      return rtn[0].dataValues

    })

      console.log("editaMeuCadastro")
      console.log(req.session.cliente)
    return res.render("editameucadastro", {
      clienteLogado: req.session.cliente, endereco: await consultaEndereco
    });
  },
  showMeusPedidos: async (req, res) => {
   let {id} = req.session.cliente
   

   let pedido = new Array
    
   await Pedido.findAll({
    where: {
      id_cliente: id,
      finalizado: "S"
    }
   })
   .then((rtn)=>{
    for (i in rtn) {

      pedido.push(rtn[i].dataValues)
      
      
    }
   })
    
   

    return res.render("meuspedidos", { clienteLogado: req.session.cliente, pedido: pedido});
  },
  showHomeAdmin: (req, res) => {
    return res.render("homeadmin", { adminLogado: req.session.usuarios });
  },
  showCadastroCliente: (req, res) => {
    return res.redirect("/homecliente");
  },
  purchaseItem: async (req, res) => {
    let produto = new Array();
    let pedidoId = 0;

    await Pedido.findAll({
      //****VAI PROCURAR PRIMEIRO O PEDIDO SE EXISTE ALGUM EM ABERTO****
      where: {
        id_cliente: req.session.cliente.id,
        finalizado: "N",
      },
    }).then(async (rtn) => {
      if (rtn.length > 0) {
        //se já tiver pedido ativo vai ter que apenas atualizar o pedido já existente

        pedidoId = rtn[0].dataValues.id;

        await Produtos.findByPk(req.params.id) //*******VAI PUXAR O PRODUTO QUE ESTÁ SENDO LANÇADO ****/
          .then(async (rtn) => {
            produto = rtn.dataValues;

            await Pedido_itens.create({
              //******* AQUI CRIA O PEDIDOITEM */
              id_pedido: pedidoId,
              id_produto: produto.id,
              qnt: 1,
              total: produto.valor,
            }).then(async (rtn) => {
              await Pedido_itens.findAll({
                //depois de criado, vai puxar todo os pedidos com o mesmo id_pedidos da tabela pedido itens
                where: {
                  id_pedido: rtn.dataValues.id_pedido,
                },
              }).then(async (rtn) => {
                let total = 0;

                for (i in rtn) {
                  total += rtn[i].dataValues.total;
                }

                await Pedido.update(
                  {
                    total: total,
                  },
                  {
                    where: {
                      id: pedidoId,
                    },
                  }
                );
              });
            });
          });
      } else {
        //******SE NÃO TIVER NENHUM PEDIDO SEM FINALIZAR NA TABELA PEDIDOS, VAI CRIAR UM PEDIDO NÃO FINALIZADO****

        await Produtos.findByPk(req.params.id) //*******MAS ANTES DE CRIAR O PEDIDO É PRECISO PUXAR O PRODUTO QUE FOI INDICADO O DESEJO DE COMPRA ****/
          .then(async (rtn) => {
            produto = rtn.dataValues; //*********PEGA ESSE PRODUTO NA BASE E SALVA DENTRO DE UMA VARIÁVEL TEMPORÁRIA CHAMADA 'produtos' */
            await Pedido.create({
              //*************************UMA VEZ QUE PEGOU O PRODUTO, VAI SALVAR PRIMEIRO O PEDIDO PRA PODER GERAR UM ID PRA ELE */
              id_cliente: req.session.cliente.id,
              total: 0,
              finalizado: "N",
            }).then(async (rtn) => {
              //**********DEPOIS DE GERADO O PEDIDO VAI SALVAR OS ITENS DESSE PEDIDO */

              await Pedido_itens.create({
                //******* AQUI CRIA O PEDIDOITEM */
                id_pedido: rtn.dataValues.id,
                id_produto: produto.id,
                qnt: 1,
                total: produto.valor,
              }).then(async (rtn) => {
                //DEPOIS DE CRIAR O PEDIDO ITEM, PEGA O VALOR DO PRODUTO E ATAULIZA NA TABELA PEDIDOS.
                await Pedido.update(
                  {
                    total: rtn.dataValues.total,
                  },
                  {
                    where: {
                      id: rtn.dataValues.id_pedido,
                    },
                  }
                );
              });
            });
          });
      }
    });

    res.redirect("/meucarrinho");
  },
  removeItem: async (req, res) => {
    let { id } = req.params;

    await Pedido_itens.destroy({
      where: {
        id: id,
      },
    });

    res.redirect("/meucarrinho");
  },
  finalizaCarrinho: async (req, res) => {
    let { id } = req.params;

    let { idPedidoItem, vlrItemCarrinho, qntItemCarrinho, vlrTotalCarrinho } = req.body;
    
    console.log("length: " + qntItemCarrinho.length)
    console.log(qntItemCarrinho.length)
    

    if  (qntItemCarrinho.length > 1){
        console.log("tem mais que 0")
        for (i in idPedidoItem) {
            let qnt =  parseInt(qntItemCarrinho[i])
            console.log("quantidade do item: " +  qnt)
          let atualizaPedidoItem = await Pedido_itens.update(
            {
              qnt: qnt ,
              total: qnt * vlrItemCarrinho[i],
            },
            {
              where: {
                id: idPedidoItem[i],
              },
            }
          );
          await atualizaPedidoItem;
        }
    }else{
        console.log("entrou no else")
        
            let qnt =  parseInt(qntItemCarrinho)
           
          let atualizaPedidoItem = await Pedido_itens.update(
            {
              qnt: qnt ,
              total: qnt * vlrItemCarrinho,
            },
            {
              where: {
                id: idPedidoItem,
              },
            }
          );
    
          await atualizaPedidoItem;
        
    } 

    let total = parseFloat(vlrTotalCarrinho).toFixed(2);
    console.log(total)
    
    let finalizaPedido = await Pedido.update(
      {
        total: total,
        finalizado: "S",
      },
      {
        where: {
          id: id,
        },
      }
    );

    await finalizaPedido;

    res.redirect("/homecliente");
  },
  atualizaCliente: async (req,res)=> {
    let {id} = req.params

    let {id_end} = req.session.cliente

    let {name,cpf,email,cep,uf,cidade,bairro,logradouro,numero,complemento} = req.body

    await Cliente.update({
      nome: name,
      cpf: cpf,
      email:email
    },{
      where: {
        id: id
      }
    })
    await Endereco.update({
      cep: cep,
      uf:uf,
      cidade:cidade,
      bairro:bairro,
      logradouro:logradouro,
      numero:numero,
      complemento: complemento
    },{
      where: {
        id: id_end
      }
    })
   

    
    await Cliente.findByPk(id)
    .then((rtn)=> {
      req.session.cliente = rtn.dataValues;
    })

    return res.redirect('/homecliente')
  }
};

module.exports = HomeController;
