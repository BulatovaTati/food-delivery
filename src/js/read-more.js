const readMoreBtn = document.querySelector('.read-more');
const extraText = document.querySelector('.extra-text');

const readMoreText = document.createTextNode('Read More');
readMoreBtn.insertBefore(readMoreText, readMoreBtn.querySelector('svg'));

readMoreBtn.addEventListener('click', () => {
  const isExpanded = extraText.style.display === 'block';

  extraText.style.display = isExpanded ? 'none' : 'block';
  readMoreText.nodeValue = isExpanded ? 'Read More' : 'Read Less';
});
