function contar(){
    var number = document.getElementById('inumber')
    var res = document.getElementById('res')

    if(number.value.length == 0){
        res.innerHTML='[ERRO] faltando dados'
    }else{
        n1 = Number(number.value)

        res.innerHTML=`${n1} x 1 = ${n1*1}<br>`
        res.innerHTML+=`${n1} x 2 = ${n1*2}<br>`
        res.innerHTML+=`${n1} x 3 = ${n1*3}<br>`
        res.innerHTML+=`${n1} x 4 = ${n1*4}<br>`
        res.innerHTML+=`${n1} x 5 = ${n1*5}<br>`
        res.innerHTML+=`${n1} x 6 = ${n1*6}<br>`
        res.innerHTML+=`${n1} x 7 = ${n1*7}<br>`
        res.innerHTML+=`${n1} x 8 = ${n1*8}<br>`
        res.innerHTML+=`${n1} x 9 = ${n1*9}<br>`
        res.innerHTML+=`${n1} x 10 = ${n1*10}`
    }
}