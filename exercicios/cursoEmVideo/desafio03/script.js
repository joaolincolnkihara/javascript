function clicou(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var msg = document.getElementById('msg')

    var c = inicio 
    while(c=fim){
        msg.innerHTML = `${c}`
        c = c+passo
    }
}