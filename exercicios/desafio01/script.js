
function carregar(){
    var body = window.document.getElementById('body')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var bom = window.document.getElementById('bom')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerText = `Agora são exatamente ${hora} horas`
    if (hora < 12){
        bom.innerHTML='Bom dia!'
    }else if(hora < 18){
        bom.innerHTML='Boa tarde!'
        body.style.backgroundColor
    } else{
        bom.innerHTML='Boa noite!'
    }
}