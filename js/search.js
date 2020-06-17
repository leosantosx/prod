const query = localStorage.getItem('valueInput')
const content = document.querySelector('.content')
const h1 = document.querySelector('.header-page h1')
const button = document.querySelector('.delete')

fetch(`https://api-prodx.000webhostapp.com/api.php/${query}`)
.then(res => { return res.json()})
.catch(res => alert("Ocorreu um erro!"))
.then(products => {

    if(products){
        button.classList.remove('hide-button')
        h1.textContent = 'Resultado da pesquisa'
        ul = montaUl(products)
        content.append(ul)
    }else{
        button.classList.add('hide-button')
        h1.textContent = `Nenhum resultado encontrado para ${query}. Tente outra busca!`
    }
})

function montaUl(product){
    const ul = document.createElement("ul")
    ul.append(montaLi(`Matrícula: ${product.matricula}`))
    ul.append(montaLi(`Cód Lote: ${product.cod}`))
    ul.append(montaLi(`Canal: ${product.canal}`))
    ul.append(montaLi(`Quantidade cadastrada: ${product.total}`))

    return ul
}

function montaLi(dado){
    const li = document.createElement("li")
    li.textContent = dado
    return li
}



