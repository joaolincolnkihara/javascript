var ano = window.document.getElementById('iano')
var sex = window.document.getElementById('sex')
var msg = window.document.getElementById('msg')

function clicar(){
    var ano2 = Number(ano.value)
    s = (2024 - ano2)
    msg.innerHTML = `Você e ${sex} e tem ${s} anos.`
}