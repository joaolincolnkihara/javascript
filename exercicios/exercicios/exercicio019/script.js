let msg = document.getElementById('msg')
var n1f = document.getElementById('divn1')
var n2f = document.getElementById('divn2')
let n1fr = document.getElementById('in1')
let n2fr = document.getElementById('in2')
var ienviar = document.getElementById('ienviar')
var somar = document.getElementById('somar')
var subtrair = document.getElementById('subtrair')
var multiplicar = document.getElementById('multiplicar')
var dividir = document.getElementById('dividir')

var n1r = Number(n1fr.value)
var n2r = Number(n2fr.value)

let somarr = n1r + n2r 
let subtrairr = n1r - n2r
let multiplicarr = n1r*n2r
let dividirr = n1r/n2r

function clicou(){
n1f.style.display = 'block'
n2f.style.display = 'block'
ienviar.style.display = 'block'
}
function enviar(){
somar.style.display = 'block'
subtrair.style.display = 'block'
multiplicar.style.display = 'block'
dividir.style.display = 'block'
}
function somou(){
msg.innerHTML = `A soma deu ${somarr}` 
}
function subtraiu(){
msg.innerHTML = `A divisão deu ${dividirr}`
}
function multiplicou(){
msg.innerHTML = `A divisão deu ${multiplicarr}`
}
function dividiu(){
msg.innerHTML = `A divisão deu ${dividirr}`
}