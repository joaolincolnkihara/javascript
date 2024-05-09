let num = document.getElementById("itabuada")
let msg = document.getElementById("msg")
function clicou(){
    msg.innerHTML = `1 x ${num.value} = ${1*num.value} <br>`
    msg.innerHTML += `2 x ${num.value} = ${2*num.value} <br>`
    msg.innerHTML += `3 x ${num.value} = ${3*num.value} <br>`
    msg.innerHTML += `4 x ${num.value} = ${4*num.value} <br>`
    msg.innerHTML += `5 x ${num.value} = ${5*num.value} <br>`
    msg.innerHTML += `6 x ${num.value} = ${6*num.value} <br>`
    msg.innerHTML += `7 x ${num.value} = ${7*num.value} <br>`
    msg.innerHTML += `8 x ${num.value} = ${8*num.value} <br>`
    msg.innerHTML += `9 x ${num.value} = ${9*num.value} <br>`
    msg.innerHTML += `10 x ${num.value} = ${10*num.value} <br>`
}