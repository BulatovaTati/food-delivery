import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.favorites-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
