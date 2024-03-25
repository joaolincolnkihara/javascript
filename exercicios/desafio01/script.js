var teste = window.document.getElementById ('teste')

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerText = `Agora são exatamente ${hora}`
    if (hora < 12){
        
    }else if(hora < 18){
        img.style.backgroundImage
    }
}