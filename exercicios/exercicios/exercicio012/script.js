function clicou(){
    var msg = document.getElementById('msg')
    var n1 = window.prompt('Diogite um numero:')
    
    if(n1 % 2 == 0){
        msg.innerHTML = `O número ${n1} que foi digitado e PAR`
    }else {
        msg.innerHTML = `O número ${n1} que foi digitado e ÍMPAR`
    }
}