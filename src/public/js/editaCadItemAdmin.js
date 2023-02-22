window.addEventListener('load', ()=>{
    console.log('JS edição do item carregada')

    const upImgProdutoCadAdmin = document.getElementById('upImgProdutoCadAdmin')
    const imgProdutoCadAdmin = document.getElementById('imgProdutoCadAdmin')



    console.log(upImgProdutoCadAdmin)

    upImgProdutoCadAdmin.addEventListener('change', (event)=> {
        console.log(event)
        

        let img = new FileReader()

        img.onload = () => {
            imgProdutoCadAdmin.src = img.result
        }

        img.readAsDataURL(upImgProdutoCadAdmin.files[0])
    })



})