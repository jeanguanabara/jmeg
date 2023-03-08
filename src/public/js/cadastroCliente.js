window.addEventListener('load', ()=>{

    const formCadCliente    = document.getElementById('formCadCliente');
    const name              = document.getElementById('name');
    const cpf               = document.getElementById('CPF');
    const email             = document.getElementById('email');
    const cep               = document.getElementById('cep');
    const uf                = document.getElementById('uf');
    const cidade            = document.getElementById('cidade');
    const bairro            = document.getElementById('bairro');
    const logradouro        = document.getElementById('logradouro');
    const numero            = document.getElementById('numero');
    const complemento       = document.getElementById('complemento');
    const senha1            = document.getElementById('senha1');
    const senha2            = document.getElementById('senha2');
    const errorValidation   = document.getElementById('errorValidation');
    
    const campos = [name,cpf, email, cep, uf, cidade, bairro, logradouro,numero, complemento]
    

    //CONSULTA DE API COM CEP
    cep.addEventListener('input',()=>{
       
       
        if (cep.value.length > 7){
 
         console.log(cep.value)
         
         fetch('https://viacep.com.br/ws/'+cep.value+'/json/')
         .then(retornoViaCep => {
             return retornoViaCep.json()
         })
         .then(retornoEndereco => {

            console.log(retornoEndereco)
             uf.value = retornoEndereco.uf.toUpperCase()
             cidade.value = retornoEndereco.localidade.toUpperCase()
             bairro.value = retornoEndereco.bairro.toUpperCase()
             logradouro.value = retornoEndereco.logradouro.toUpperCase()
         })
        }
         
     })


     //VALIDAÇÃO DO FORMULÁRIO
    formCadCliente.addEventListener('submit', (event)=> {

        if ((validaSenha(senha1,senha2) === false)||(validaCampos(campos) === false)){
            event.preventDefault();
            errorValidation.innerHTML = 'FAVOR REVISAR OS DADOS'
        }

        

        


        
        
    })

    

    //VALIDAÇÃO DE CAMPOS PREENCHIDOS
    function validaCampos (array) {
        

        for (let i in array) {
            if (array[i].value.length === 0){
                return false
            }
        }

        return true

    }

    //VALIDAÇÃO SE A SENHA É IGUAL
    function validaSenha(a,b) {
        if ((a.value.length > 0)&&(b.value.length > 0))  {
            if (a.value === b.value) {
                return true
            }else {
                return false
            }
        }else{
            return false
        }
    }

})