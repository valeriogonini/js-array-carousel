//MILESTONE 2
//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
//Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
//MILESTONE 3
//Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.



const arreyImg = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]


const nameItemContainer = document.querySelector(".item-container")
let itemsHTMLDome = ""
for (let i = 0; i < arreyImg.length; i++) {
    const imgSlide = arreyImg[i]

    const slideHTMLimg = `
<div class="img-item">
    <img src="${imgSlide}">
</div>

`;
    itemsHTMLDome += slideHTMLimg


    //console.log(slideHTMLimg);


}
nameItemContainer.innerHTML = itemsHTMLDome;

const itemsContainerImg = document.getElementsByClassName("img-item")

let activeHTMLitem = 0;
//const primoItem = itemsContainerImg[activeHTMLitem]
itemsContainerImg[activeHTMLitem].classList.add("active")


const rightArrow = document.querySelector(".right")
const leftArrow = document.querySelector(".left")



rightArrow.addEventListener("click", function () {
    itemsContainerImg[activeHTMLitem].classList.remove("active")

    activeHTMLitem++

    itemsContainerImg[activeHTMLitem].classList.add("active")

})
leftArrow.addEventListener("click", function () {
    itemsContainerImg[activeHTMLitem].classList.remove("active")

    activeHTMLitem--

    itemsContainerImg[activeHTMLitem].classList.add("active")

})






