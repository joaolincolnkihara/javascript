/*random = numero aleatorio*/
            /*floor = arredonda para baixo*/
            /*O random + o floor gera um numero abaixo de 99 por isso e nescessario a adição do +1*/
            let aleatorio = Math.floor(Math.random() * 100) + 1

        function clicou(){
            let msg = document.getElementById('msg')
            let num = window.prompt(`Qual o numero?`)

            if(num == aleatorio){
                msg.innerHTML += `<strong>Parabéns</strong>, você acertou<br>`
            }else if(num > aleatorio){
                msg.innerHTML +=`Você falou ${num}. Meu numero e <strong>MENOR</strong><br>`
            }else{
                msg.innerHTML +=`Você falou ${num}. Meu numero e <strong>MAIOR</strong><br>`
            }
        }