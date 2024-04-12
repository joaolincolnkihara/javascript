function clicou(){
    let agora = new Date
    let msg = document.getElementById('msg')
    msg.innerHTML = `O que ue recebi do sistema foi <mark>${agora}<\mark>`
}