import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
const imagesMarkup = createImageMarkup(galleryItems);
list.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageMarkup(images) {
  return images.map(({ description, original, preview }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
  })
  .join('');
}



const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250});
