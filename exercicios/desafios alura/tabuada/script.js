var res = document.getElementById('resultado')

function tabuada(){
    var number = document.getElementById('inumb')

    var numb = Number.parseInt(number.value)

    res.innerHTML= `1 X ${numb} = ${numb*1}<br>`
    res.innerHTML+= `2 X ${numb} = ${numb*2}<br>`
    res.innerHTML+= `3 X ${numb} = ${numb*3}<br>`
    res.innerHTML+= `4 X ${numb} = ${numb*4}<br>`
    res.innerHTML+= `5 X ${numb} = ${numb*5}<br>`
    res.innerHTML+= `6 X ${numb} = ${numb*6}<br>`
    res.innerHTML+= `7 X ${numb} = ${numb*7}<br>`
    res.innerHTML+= `8 X ${numb} = ${numb*8}<br>`
    res.innerHTML+= `9 X ${numb} = ${numb*9}<br>`
    res.innerHTML+= `10 X ${numb} = ${numb*10}<br>`
}