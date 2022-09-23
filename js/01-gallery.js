import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const render = galleryItems.map(item => `<div class="gallery__item">
<a class:"gallery__link" href="${item.original}">
<img class: "gallery__image" src="${item.preview}"
data-source="${item.original}"
alt= "${item.description}"/></a></div>`).join(" ");

galleryBox.insertAdjacentHTML("beforeend", render)

galleryBox.addEventListener("click", onClick);

function original(e) {
e.preventDefault()
if(e.target === e.curentTarget) return;

const currentImage = e.target;
console.log(`"Current image:${currentImage.dataset.source}"`);
const instance = basicLightbox.create(
    `<div class: "modal"> <img src= "${currentImage.dataset.source}"/>
</div>`)
instance.show()
}