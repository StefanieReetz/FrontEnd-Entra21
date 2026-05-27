const formulario = document.getElementById('meuForm');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email')


    if (email.value.includes("@") && email.value.includes(".")) {

        email.classList.add('input-valido')
        email.classList.remove('input-invalido')


    } else {

        email.classList.add('input-invalido')
        email.classList.remove('input-valido');




    }
})