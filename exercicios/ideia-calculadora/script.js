let res = document.getElementById('msg')


function insert(num){
    res.innerHTML+=num
}

function apagar(){
    res.innerHTML=''
}

function back(){
    let resultado = document.getElementById('msg').innerHTML
    document.getElementById('msg').innerHTML=resultado.substring(0, resultado.length -1)
}

function resultado(){
    let resultado = document.getElementById('msg').innerHTML
    if(resultado){
        res.innerHTML = eval(resultado)
    }else{
        res.innerHTML=''
    }
}