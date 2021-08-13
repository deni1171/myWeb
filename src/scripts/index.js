import '../styles/main.css';
import '../styles/responsive.css';

const input = document.querySelector('input');
const slideShows = document.querySelector('.slideShows');
const slideShowMoreButton = document.querySelector('.slideShow-more-button');
const slideShowMoreContainer = document.querySelector('.slideShow-more-container');

input.addEventListener('change', (event) => {
  event.stopPropagation();
  slideShows.classList.toggle('blue');
});

slideShowMoreButton.addEventListener('click', () => {
  slideShowMoreContainer.classList.toggle('more');
  slideShowMoreButton.classList.toggle('rotate');
});
