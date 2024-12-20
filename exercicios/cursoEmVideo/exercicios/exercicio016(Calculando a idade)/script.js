function iniciar(){
    var ano = window.prompt('Em que ano você nasceu?')
    let msg = document.getElementById('msg')
    let agora = new Date()
    let anoatual = agora.getFullYear()
    let n1 = Number.parseFloat(ano.value)
    let n2 = Number.parseFloat(anoatual.value)
    let idade = n2-n1

    msg.innerHTML= `Quem nasceu em ${ano} vai completar ${anoatual-ano} em ${anoatual}`
}