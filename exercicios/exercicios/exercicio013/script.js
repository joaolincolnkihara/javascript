function clicou(){
    var msg = document.getElementById('msg')
    var n1 = window.prompt('Digite um número')
    var n2 = window.prompt('Digite outro número')

    if(n1>n2){
        var m = n1>n2
        msg.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor e ${n1}`
    }else if(n2>n1){
        msg.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor e ${n2}`
    }else{
        msg.innerHTML = `Os valores sao iguais`
    }
}