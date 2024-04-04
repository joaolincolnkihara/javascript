function clicou(){
    var msg0 = document.getElementById('msg0')
    var msg1 = document.getElementById('msg1')
    var msg2 = document.getElementById('msg2')
    var msg3 = document.getElementById('msg3')
    
    var nome = window.prompt('Qual e o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    var n2 = Number(window.prompt(`Alem de ${n1}, qual a outra nota de ${nome}?`))

    msg0.innerHTML= `Calculando a média final de ${nome}`
    msg1.innerHTML= `As notas obtidas foram ${n1} e ${n2}`
    var m = (n1+n2)/2
    msg2.innerHTML= `A média final será ${m}`
    if(m>=7){
        msg3.innerHTML = `A mensagem que temos é: Meus parabéns!`
    }else{
        msg3.innerHTML = `A mensagem que temos é: Estude um pouco mais!`
    }
}