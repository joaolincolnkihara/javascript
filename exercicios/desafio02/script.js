function clicar(){
    var ano = window.document.getElementById('iano')
    var msg = window.document.getElementById('msg')
    var teste = window.document.getElementById('teste')
    var img = window.document.getElementById('img')
    var agora = new Date()
    var atual = agora.getFullYear()
    
    var ano2 = Number(ano.value)
    s = (atual - ano2)

    msg.innerHTML = `Você e ${sex} e tem ${s} anos.`

    if (ano2 == 0 || ano2 > atual){
        msg.innerHTML = '[ERRO] Verifique os dados e tente novamente'
    }else{
        var img = document.createAttribute('img')
        img.setAttribute('id', 'foto')
        var sex = window.document.getElementsByName('sex')
        var genero = ""
        if (sex[0].checked){
            genero = 'homem'
            msg.innerHTML = `Você e ${genero} e tem ${s} anos.`
            if ( s>0 && s<10 ){
                img.setAttribute('src', 'imagens/criança m.jpg')
            }else if ( s<21 ){
                img.setAttribute('src', 'imagens/jovem m.jpg')
            }else if ( s<50 ){
                img.setAttribute('src', 'imagens/adulto m.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso m.jpg')
            }
        } else{
            genero = 'mulher'
            msg.innerHTML = `Você e ${genero} e tem ${s} anos.`
            if ( s>0 && s<10 ){
                img.setAttribute('src', 'imagens/criança f.jpg')
            }else if ( s<21 ){
                img.setAttribute('src', 'imagens/jovem f.jpg')
            }else if ( s<50 ){
                img.setAttribute('src', 'imagens/adulto f.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso f.jpg')
            }
        } 
    }
}