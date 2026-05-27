const form = document.getElementById('meuForm');
const texto = form.texto
texto.addEventListener('keyup', function(event) {
    let contador = document.getElementById('contador')
    let botao = document.getElementById("botao")
    let restantes = 50 - texto.value.length
    if (restantes > 0 && restantes < 50) {
        //Habilita botão
        contador.innerText = "Caracteres restantes: " + restantes
        contador.classList.remove("limite-atingido")
        botao.disabled = false
    }else {
        contador.classList.add("limite-atingido")
        contador.innerText = "Limite atingido!"
        botao.disabled = true
    }
        // contador.classList.remove('erro')
        // contador.classList.add('acerto')
        //Borda verde
})
 