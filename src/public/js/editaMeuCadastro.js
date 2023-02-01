window.addEventListener('load', ()=> {
    console.log('Loaded edita meu cadastro')
    
    

    const cboEstado = document.getElementById('cboEstado')

    console.log('teste', cboEstado.selectedIndex)



    cboEstado.addEventListener('change',()=>{
        console.log('teste', cboEstado.selectedIndex)  
    })

   
})