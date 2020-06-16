const formInput = document.querySelectorAll("form input")
const button = document.querySelector("form button")

let tamCampos = [6, 27, 8]

for(let i = 0; i < formInput.length; i++){
    formInput[i].addEventListener("input", () => {

        if(validaForm(formInput, tamCampos)){
            button.click()
        }else if (formInput[i].value.length == tamCampos[i]) {
            if(formInput.length <= 3){
                formInput[i + 1].focus()
            }       
        }
    })
}

function validaForm(form, tam){
    if(form[0].value.length == tam[0] &&
       form[1].value.length == tam[1] &&
       form[2].value.length == tam[2]){
           return true
       }
    return false
}