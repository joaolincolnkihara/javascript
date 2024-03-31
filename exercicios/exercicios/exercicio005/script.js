function clicou(){
    var resultado = document.getElementById('resultado')
    var n1 = Number(window.prompt('Digite o primeiro numero'))
    var n2 = Number(window.prompt('Digite o segundo numero'))
    var s = n1 + n2

    resultado.innerHTML = `A soma de ${n1} e ${n2} e igual a ${s}`
}