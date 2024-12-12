
function carregar(){
    var body = window.document.getElementById('body')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bom = window.document.getElementById('bom')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerText = `Agora são exatamente ${hora} horas`
    if (hora > 0 && hora < 12){
        bom.innerHTML='Bom dia!'
        
    }else if(hora < 18){
        bom.innerHTML='Boa tarde!'
        img.src = 'imagens/imagemtarde.jpg'
        body.style.backgroundColor = '#d1972c'
    } else if (hora < 23){
        bom.innerHTML='Boa noite!'
        img.src = 'imagens/imagemnoite.jpg'
        body.style.backgroundColor = '#333644'
    }
}