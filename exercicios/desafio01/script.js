var teste = window.document.getElementById ('teste')

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var teste = window.document.getElementById ('teste')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora são exatamente ${hora}`
    teste.innerHTML = `teste`

}