import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
const imagesMarkup = createImageMarkup(galleryItems);
list.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageMarkup(images) {
  return images.map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </div>`;
  })
  .join('');
}

list.addEventListener('click', selectImage);

function selectImage (event){
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
        return;
    }

    const urlLargeImage = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
    <img src="${urlLargeImage}"  width="800" height="600">`)

instance.show()

}
