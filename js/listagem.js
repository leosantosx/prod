const tbody = document.querySelector('table tbody')

fetch("https://api-prodx.000webhostapp.com")
.then(res => { return res.json()})
.catch(res => alert("Ocorreu um erro!"))
.then(products => {
    for (var i in products) {
        const trProduct = montaTr(products[i])
        tbody.append(trProduct)
    } 
})

function montaTr(product){
    const tr = document.createElement('tr')
    tr.append(montaTd(product.matricula))
    tr.append(montaTd(product.cod))
    tr.append(montaTd(product.canal))
    return tr
}

function montaTd(dado){
    const td = document.createElement('td')
    td.textContent = dado
    return td
}