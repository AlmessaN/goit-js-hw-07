import { galleryItems } from './gallery-items.js';
// Change code below this line

const render = galleryItems.map(item => `<div class="gallery__item">
<a class:"gallery__link" href="${item.original}">
<img class: "gallery__image" src="${item.preview}"
data-source="${item.original}"
alt= "${item.description}"/></a></div>`).join("");

const galleryBox = document.querySelector('.gallery');

galleryBox.insertAdjacentHTML("beforeend", render);

galleryBox.addEventListener("click", e => {
    e.preventDefault();
    if(e.target === e.curentTarget) {
        return
    }

    const imageOriginal = e.target.getAttribute("data-source")
const instance = basicLightbox.create(
            `<img src= "${imageOriginal}"/>`)
        instance.show()
    
galleryBox.addEventListener("keydown", e => {
            if(e.key === "Escape") {
                instance.close();
            }
        })
    })