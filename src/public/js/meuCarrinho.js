window.addEventListener("load", () => {
    console.log("Loaded js meuCarrinho");

    

    const somarItemCarrinho = document.querySelectorAll("#somar-item-carrinho");
    const subtrairItemCarrinho = document.querySelectorAll(
        "#subtrair-item-carrinho"
    );
    const qntItemCarrinho = document.querySelectorAll("#qnt-item-carrinho");
    const vlrItemCarrinho = document.querySelectorAll('#vlr-item-carrinho')
    const vlrTotalCarrinho = document.querySelector('#vlr-total-carrinho')

    
    calculaVlrTotal()//assim que carregar a página vai executar a função de calcular o valor total.



    

    console.log("somar item carrinho", somarItemCarrinho);
    console.log("qnt item carrinho", qntItemCarrinho);
    console.log("subtrair item carrinho", subtrairItemCarrinho);
    console.log("vlr item carrinho", vlrItemCarrinho);
    console.log("vlr total carrinho", vlrTotalCarrinho);

    
        calculaVlrTotal()


    
//BOTÕES DE ADIÇÃO E SUBTRAÇÃO DE QUANTIDADE DE PRODUTOS NO CARRINHO
    for (let i in somarItemCarrinho) {
        
        somarItemCarrinho[i].addEventListener("click", (event) => {
            let qntAtualItemCarrinho = parseInt(qntItemCarrinho[i].innerText);
            

            qntAtualItemCarrinho += 1;

            

            qntItemCarrinho[i].innerHTML = qntAtualItemCarrinho;
            calculaVlrTotal()
        }); //fim somar item no carrinho

        subtrairItemCarrinho[i].addEventListener("click", (event) => {
            let qntAtualItemCarrinho = parseInt(qntItemCarrinho[i].innerText);
            

            if (qntAtualItemCarrinho > 1) {
                qntAtualItemCarrinho -= 1;

                

                qntItemCarrinho[i].innerHTML = qntAtualItemCarrinho;
                calculaVlrTotal()
            }
        }); //fim subtrair item do carrinho, só deixa subtrair até 1
    } //fim for somar e subtrair qnt do item no carrinho



    function calculaVlrTotal(){

        console.log('Executou funcao')
        let vlrTotal = 0
        console.log("Valor Começo é pra ta zero = ",vlrTotal)

        

        for (let i = 0; i< qntItemCarrinho.length; i++){
            console.log("Posição do array = ",i)
            console.log('let i = ',i)
            let qnt = parseFloat(qntItemCarrinho[i].innerText).toFixed(2)
            console.log("Quantidade desse item é = ",qnt)
            let vlr = parseFloat(vlrItemCarrinho[i].innerText).toFixed(2)
            console.log("Valor desse Item é = ",vlr)
            
            vlrTotal += qnt*vlr
            console.log("Meio de função é dentro do for, vair ser o valor até essa execução = ",vlrTotal)
        }
        
        
        

        console.log("Última função é pra ser o valor final do carrinho",vlrTotal)

        vlrTotalCarrinho.innerHTML = vlrTotal.toFixed(2)
        
    }


});
