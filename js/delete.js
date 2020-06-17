const buttonDelete = document.querySelector('.delete')

buttonDelete.addEventListener('click', () => {

    fetch(`https://api-prodx.000webhostapp.com/api.php/${query}`, {
            method: "HEAD"
        })
        .then(res => {
            alert("Apagado com sucesso!")
            document.querySelector('.header-page a').click()
        })
        .catch(res => alert("Ocorreu um erro!"))      
})