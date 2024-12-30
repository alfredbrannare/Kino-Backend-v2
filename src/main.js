// vite will now compile our scss
import './styles/styles.scss';
//JS Import
import MovieCardGenerator from './js/_frontpage_movie_cards.js';
import LoadAllFilmsPage from './js/LoadAllFilmsPage.js';
import ApiBackend from './js/ApiBackend.js';

if (document.querySelector('.movies__list-all')) {
  const loadingMessage = document.createElement('div');
  loadingMessage.classList.add('loading-message');
  loadingMessage.innerText = 'Api is starting\nLoading movies... Please wait.';
  document.querySelector('.loading-message').appendChild(loadingMessage);
  loadingMessage.style.display = 'none';

  const backend = new ApiBackend('https://kino-bio-projekt.onrender.com');
  console.log('Link to API:' + backend);
  const filmList = new LoadAllFilmsPage(backend);

  filmList.add(document.querySelector('.movies__list-all'), loadingMessage);
} else {
  const movieCardGenerator = new MovieCardGenerator();
  movieCardGenerator.CardGenerator(4);
}
//Mobile-menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger'); // Use the class .hamburger
  const menu = document.querySelector('.hamburger__items');
  const closeButton = document.querySelector('.hamburger__close'); // Select the close button

  if (hamburger && menu) {
    // Toggle the menu when clicking on the hamburger
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  // Close the menu when clicking the close button
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      menu.classList.remove('active');
      hamburger.classList.remove('open');
    });
  }
});
