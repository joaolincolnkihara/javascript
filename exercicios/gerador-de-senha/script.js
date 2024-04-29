function gerar(){
    let title = document.getElementById('title')
    let password = document.getElementById('password')
    let copy = document.getElementById('copy')
    let passwordcontainer = document.getElementById('container-password-hide')

    if (passwordcontainer.style.display == 'none'){
        passwordcontainer.style.display='block'
    }else{
        passwordcontainer.style.display='none'
    }
}