// array significa lista
// para usar um array é necessario colocar []
//ex: var frutas = ["macã", "banana"]
// .length para ver o tamanho da lista

// frutas.length
//2

//a contagem dos numeros começa em zero
//frutas[0]
//Maçã


var listaDeNumerosSecretos = []
var numLimite = 10;
var numerSecreto = gerarNumeroAleatorio()  
var tentativas = 1

function exibirTextoNaTela(tag, texto){
    var campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function textoInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
exibirTextoNaTela('p', numerSecreto)
}
textoInicial()

function verificarChute(){
    var chute = document.querySelector('input').value
    
    if(chute == numerSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        //e ultilizado o ? e : como a estrutura if/else
        var opcaoTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        var msgTentativa = `Você acertou o número secreto com ${tentativas} ${opcaoTentativa}`
        exibirTextoNaTela('p', msgTentativa)
        //.removeAttribute() = remove o atributo sdelecionado em parenteses
        reset = document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        if (chute > numerSecreto){
            exibirTextoNaTela('h1', 'Errou')
            exibirTextoNaTela('p','O seu é menor que o número secreto')
        }else{
            exibirTextoNaTela('h1', 'Errou')
            exibirTextoNaTela('p','O seu é maior que o número secreto')
        }
        tentativas++
        limparChute()
    }
}

function gerarNumeroAleatorio(){
    var numeroEscolhido = parseInt(Math.random() * numLimite + 1)
    var quantidadeDeElementosNaLista = listaDeNumerosSecretos.length;

    if(quantidadeDeElementosNaLista == numLimite ){
        listaDeNumerosSecretos = []
    }

    if(listaDeNumerosSecretos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSecretos.push(numeroEscolhido)
        return numeroEscolhido
    }
}
//RESET DO INPUT
function limparChute(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numerSecreto = gerarNumeroAleatorio()
    limparChute()
    tentativas = 1
    textoInicial()
    //.setAttribute() = usado para atribuir um atributo e é essencial colocar a variavel true ou false para o funcionamento
    document.getElementById('reiniciar').setAttribute('disabled',true)
}