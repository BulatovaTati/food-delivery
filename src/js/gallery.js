import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://bulatovatati.github.io/food-delivery/images/favorites/gamburger.png',
    original:
      'https://bulatovatati.github.io/food-delivery/images/favorites/gamburger-3x.png',
    description: 'photo of gamburger',
  },
  {
    preview:
      'https://bulatovatati.github.io/food-delivery/images/favorites/pasta.png',
    original:
      'https://bulatovatati.github.io/food-delivery/images/favorites/pasta-3x.png',
    description: 'photo of pasta',
  },
  {
    preview:
      'https://bulatovatati.github.io/food-delivery/images/favorites/pizza.png',
    original:
      'https://bulatovatati.github.io/food-delivery/images/favorites/pizza-3x.png',
    description: 'photo of pizza',
  },
  {
    preview:
      'https://bulatovatati.github.io/food-delivery/images/favorites/chicken.png',
    original:
      'https://bulatovatati.github.io/food-delivery/images/favorites/chicken-3x.png',
    description: 'photo of chicken',
  },
  {
    preview:
      'https://bulatovatati.github.io/food-delivery/images/favorites/salat.png',
    original:
      'https://bulatovatati.github.io/food-delivery/images/favorites/salat-3x.png',
    description: 'photo of salat',
  },
  {
    preview:
      'https://bulatovatati.github.io/food-delivery/images/favorites/borshch.png',
    original:
      'https://bulatovatati.github.io/food-delivery/images/favorites/borshch-3x.png',
    description: 'photo of borshch',
  },
];

const galleryList = document.querySelector('ul.favorites-list');

const markup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="favorites-item">
            <a href=${original}>
                <img class="favorites-img"
                src=${preview}
                alt='${description}' />
            </a>
        </li>  `
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.favorites-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
