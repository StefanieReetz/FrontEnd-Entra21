const formulario = document.getElementById('meuForm');

formulario.addEventListener('submit', function(event) {
    let inputNome = document.getElementById('nome')
    let spanErro = document.getElementById('erroNome')
    event.preventDefault();

    if (formulario.nome.value === "") {

         inputNome.classList.add('borda-vermelha')
         spanErro.innerHTML = "Campo origatorio"



    } else {

        // Borda vermelho
         inputNome.classList.remove('borda-vermelha')
         spanErro.innerHTML = ""
    }
})