import Splide from '@splidejs/splide';

import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
let elms = document.getElementsByClassName('splide');

for (let i = 0; i < elms.length; i++) {
  new Splide(elms[i]).mount();
}
