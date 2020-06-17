const buttonSearch = document.querySelector(".search")
const modalSearch = document.querySelector("#modal")
const form = document.querySelector("#modal form")

buttonSearch.addEventListener("click", () => {
    modalSearch.classList.remove("hide")
})

modalSearch.querySelector(".close")
.addEventListener("click", () => {
    modalSearch.classList.add("hide")
})


form.addEventListener("submit", () => {
    localStorage.setItem('valueInput', form.search.value)
})