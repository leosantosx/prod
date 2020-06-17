function cadastraProduct(input){
    const productBody = {
        matricula: input[0].value,
        cod: input[1].value,
        canal: input[2].value
    }

    //console.log(productBody)
    
    fetch("https://api-prodx.000webhostapp.com/api.php", {
        method: "POST",
        body: JSON.stringify(productBody)
    })
    .then(res => alert("Cadastrado com sucesso!"))
    .catch(res => alert("Ocorreu um erro!"))
    
    
}