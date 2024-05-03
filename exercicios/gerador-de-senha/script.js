let passwordcontainer = document.getElementById('container-password-hide')

let valor = document.getElementById('valor')
let slider = document.getElementById('islider')

let password = document.getElementById('password')

let charset = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ1234567890!@'
let novaSenha = ''

// para aparecer o valor do slider no texto
valor.innerHTML = slider.value
//slider ira colocar o valor no html, sendo 'this' o valor atual
slider.oninput = function(){
    //valor recebe valor atual
    valor.innerHTML = this.value
}

function gerar(){
    if (passwordcontainer.style.display == 'none'){
        passwordcontainer.style.display='block'
    }
    else{
        passwordcontainer.style.display='none'
    }

    let pass= ""
    for( let i=0, n =charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random()*n))
    }
    passwordcontainer.classList.remove('hide')
    password.innerHTML = pass; 
}