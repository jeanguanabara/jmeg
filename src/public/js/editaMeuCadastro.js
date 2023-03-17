window.addEventListener('load', ()=> {
    console.log('Loaded edita meu cadastro')
    
    

    const name = document.getElementById('name')
    const cpf = document.getElementById('cpf')
    const email = document.getElementById('email')
    const cep = document.getElementById('cep')
    const uf = document.getElementById('uf')
    const cidade = document.getElementById('cidade')
    const bairro = document.getElementById('bairro');
    const logradouro = document.getElementById('logradouro')
    const complemento = document.getElementById('complemento')
    

    
    



    cep.addEventListener('input',()=>{
       
       
       if (cep.value.length > 7){

        console.log(cep.value)
        
        fetch('https://viacep.com.br/ws/'+cep.value+'/json/')
        .then(retornoViaCep => {
            return retornoViaCep.json()
        })
        .then(retornoEndereco => {
            uf.value = retornoEndereco.uf
            cidade.value = retornoEndereco.localidade
            bairro.value = retornoEndereco.bairro
            logradouro.value = retornoEndereco.logradouro
        })
       }
        
    })

    

   
})