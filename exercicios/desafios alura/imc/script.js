//Pegar o peso e a altura: peso em kg dividido altura * altura (IMC = peso/(altura*altura)). Depois aparecer o resultado em id = resultado
function exibirTextoNaTela(tag, texto){
    var campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function calcular(){
    var peso = document.getElementById('kg')
    var altura = document.getElementById('altura')

    var kg = Number(peso.value)
    var m = Number(altura.value)

    var resultado = kg/(m*m)
    var resFormatado = resultado.toFixed(2)

    var res = document.querySelector('h3')
    res.innerHTML = resFormatado
    var avaliacao = document.querySelector('h4')

    if(resFormatado <= 18.5){
        avaliacao.innerHTML='Magreza'
    } if(resFormatado > 18.5 && resFormatado <=24.9){
        avaliacao.innerHTML='Normal'
    }if(resFormatado > 25 && resFormatado <= 29.9){
        avaliacao.innerHTML='Sobrepeso'
    }if(resFormatado > 30 && resFormatado <=39.9){
        avaliacao.innerHTML='Obesidade'
    }if(resFormatado > 40){
        avaliacao.innerHTML='Obesidade Grave'
    }
}
