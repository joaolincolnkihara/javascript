function clicou(){
    var msg = window.document.getElementById('msg')
    var nome = window.prompt('Qual seu nome?')
    msg.innerHTML = `Olá, <strong>${nome}!</strong> É um grande prazer te conhecer! 🖖`
}