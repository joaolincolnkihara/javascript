var msg = document.getElementById('msg')
var inicio = document.getElementById('iinicio')
var fim = document.getElementById('ifim')
var passo = document.getElementById('ipasso')

function clicou(){
    if(inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        msg.innerHTML = '[ERRO] faltando dados'
    }else{
        msg.innerHTML = 'Contando:'

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
       
        if(i<f){
        for(let c = i; c<= f; c+=p){
            msg.innerHTML += ` ${c} \u{1F449}`
        }
    }else{
        for(let c = i; c>= f; c-=p){
            msg.innerHTML += ` ${c} \u{1F449}`
        }
    }msg.innerHTML += "\u{1F3C1}"
    }
}