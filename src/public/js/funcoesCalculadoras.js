

const funcaoCalculadora = {
    calculaVlrTotalCarrinho: ()=> {
        let vlrTotal = 0
        

        for (let i in qntItemCarrinho){
            let qnt = parseInt(qntItemCarrinho[i].innerText)
            let vlr = parseFloat(vlrItemCarrinho[i].innerText)
            
            vlrTotal += qnt*vlr
        }

        vlrTotalCarrinho.innerHTML = vlrTotal
    }
}


module.exports = funcaoCalculadora