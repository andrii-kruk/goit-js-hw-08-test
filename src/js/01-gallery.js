// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryListEl = document.querySelector('.gallery');
const imgCardsMarkup = onCreateGalleryItem(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', imgCardsMarkup);

galleryListEl.addEventListener('click', onGalleryListClick);


function onCreateGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </div>   
    `;
  }).join('');
};


function onGalleryListClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  lightbox.open();
}

