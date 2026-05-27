let inputAceite = document.getElementById('aceite')

inputAceite.addEventListener('change', function(event){
    let botao = document.getElementById('botao')

    if (inputAceite.checked) {
        
        botao.disabled = false

    } else {        
        botao.disabled = true
    }
})