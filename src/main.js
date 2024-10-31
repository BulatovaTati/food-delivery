import './js/menu';
import './js/modal';
// Array of favorite items with paths and names
const favorites = [
  { src: '/images/favorites/borshch.png', name: 'Borshch' },
  { src: '/images/favorites/pasta.png', name: 'Pasta' },
  { src: '/images/favorites/gamburger.png', name: 'Hamburger' },
  { src: '/images/favorites/chicken.png', name: 'Chicken' },
  { src: '/images/favorites/salat.png', name: 'Salad' },
  { src: '/images/favorites/pizza.png', name: 'Pizza' },
];

const formList = document.querySelector('.veg-list');
const aboutBtn = document.querySelector('.about-btn');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

aboutBtn.addEventListener('click', openModal);
leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);

function openModal() {
  formList.innerHTML = '';

  const listItems = favorites
    .map(
      (item, index) => `
    <li class="veg-item">
      <img src="${item.src}" alt="${item.name}" class="veg-image" />
      <span class="form-label">${item.name}</span>
      <input type="number" class="veg-form-input form-input" name="quantity-${index}"   min="0" step="1" />
    </li>
  `
    )
    .join('');

  formList.innerHTML = listItems;
}

function scrollLeft() {
  formList.scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRight() {
  formList.scrollBy({ left: 150, behavior: 'smooth' });
}
