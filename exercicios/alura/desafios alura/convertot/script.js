//  1dolar == 4,80
function converter(){
    var dolar = document.getElementById('idolar')
    var real = document.getElementById('ireal')

    var numbDolar = Number(dolar.value)
    var convertido = numbDolar * 4.80

    real.innerHTML = ('R$' + convertido)
}