
        function clicou(){
            var msg = document.getElementById('msg')
            msg.innerHTML += 'Contando de 1 a 10<br>'
            for(let c = 1; c <= 10; c++){
                
                msg.innerHTML += `${c} `
            }
        }
