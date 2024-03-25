var ano = window.document.getElementById('iano')
var sex = window.document.getElementById('sex')
var mas = window.document.getElementById('imas')
var fem = window.document.getElementById('ifem')
var msg = window.document.getElementById('msg')
var teste = window.document.getElementById('teste')

function clicar(){
    var ano2 = Number(ano.value)
    s = (2024 - ano2)
    if (sex != mas){
        teste.innerHTML = 'Feminino'
    }else{
        teste.innerHTML = 'Masculino'
    }
    msg.innerHTML = `Você e ${sex} e tem ${s} anos.`
}