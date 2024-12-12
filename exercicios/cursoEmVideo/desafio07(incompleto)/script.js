let num = document.getElementById('inumber')
        let lista = document.getElementById('ilista')
        let msg = document.getElementById('msg')
        let valores = []

        function isNumber(n){
            if(Number(n) >= 1 && Number(n) <= 100){
                return true
            }else{
                return false
            }
        }
        function inLista(n, l){
            if(l.indexOf(NUmber(n))!= 1){
                return true
            }else{
                return false
            }
        }

        function enviar(){
            if(isNumber(num.value) && !inLista(num.value)){
                valores.push(NUmber(num.value))
                let item = document.createElement('option')
                item.text = `Valor ${num.value} adicionado`
                lista.appendChild(item)
            }else{
                window.alert('Valor não encontrado ou ja esta na lista')
            }
        }