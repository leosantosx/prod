const buttonSearch = document.querySelector(".search")
const modalSearch = document.querySelector("#modal")

buttonSearch.addEventListener("click", () => {
    modalSearch.classList.remove("hide")
})

modalSearch.querySelector(".close")
.addEventListener("click", () => {
    modalSearch.classList.add("hide")
})