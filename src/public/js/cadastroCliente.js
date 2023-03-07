window.addEventListener('load', ()=>{

    const formCadCliente    = document.getElementById('formCadCliente');
    const name              = document.getElementById('name');
    const cpf               = document.getElementById('cpf');
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

    
    console.log("vai aparecer o campo name")
    console.log(name)
    console.log("apareceu name")
    
    name.addEventListener('change', () => {
        console.log(name)
    })
    
    formCadCliente.addEventListener('submit', (event)=> {
        
        
        event.preventDefault();
    })
})