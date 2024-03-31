window.alert("Seja bem-vindo(a) ao meu site!")

function clicou(){
    var resultado = window.document.getElementById('resultado')
    var n1 = window.prompt('Digite um número:')
    resultado.innerHTML = `O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!`
}