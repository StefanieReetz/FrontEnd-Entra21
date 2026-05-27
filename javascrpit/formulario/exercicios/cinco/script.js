const form = document.getElementById("form")
form.tipo.forEach(function(radio){
    radio.addEventListener("change", function(){
        if(radio.value == "juridica"){
            form.documento.disabled = true
            form.documento.classList.add("fundo-cinza")
            form.documento.placeholder = "CNPJ (não implementado)"
        } else {
            form.documento.disabled = false
            form.documento.classList.remove("fundo-cinza")
            form.documento.placeholder = "CPF"
        }
    })
})