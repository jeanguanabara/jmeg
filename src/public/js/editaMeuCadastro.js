window.addEventListener('load', ()=> {
    console.log('Loaded edita meu cadastro')
    
    

    const name = document.getElementById('name')
    const cpf = document.getElementById('cpf')
    const email = document.getElementById('email')
    const cep = document.getElementById('cep')
    const estado = document.getElementById('cboEstado')
    const cidade = document.getElementById('cidade')
    const logradouro = document.getElementById('logradouro')
    const complemento = document.getElementById('complemento')
    

    console.log(cep)
    



    cep.addEventListener('input',()=>{
       console.log('Change para ',cep.value)
        
    })

   
})