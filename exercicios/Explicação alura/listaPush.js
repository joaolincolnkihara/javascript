var num = 10

function gerarNumeroAleatorio(){
    let numEscolhido = parseInt(Math.random()* numLimite + 1); // Gera um número aleatório
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //Mostra a quantidade de elementos na lista

    if(quantidadeDeElementosNaLista == numLimite){ //se a quantidade de elementos for igual ao numero limite
        listaDeNumerosSorteados = []    //Zera a lista
    }if(listaDeNumerosSorteados.includes(numEscolhido)){ //.include verifica se um valor esta presente no array(lista)
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push()//retorna determinado número para o array
        return numEscolhido()
    }
}