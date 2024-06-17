function validador(){
    var input = document.getElementById("myInput")
    var inputValue = input.value.trim()
    if (inputValue.length < 5) {
        alert("O texto precisa ter pelo menos 5 caracteres.");
        return;
    }
}