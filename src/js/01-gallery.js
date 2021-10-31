// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';


console.log(galleryItems);

const galleryItemList = document.querySelector('.gallery')

const imagesList = galleryItems.map(({ description, original, preview }) => {
    
    return ` 
  <a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
}).join('');
   

galleryItemList.insertAdjacentHTML('afterbegin', imagesList)


const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:250});

 

