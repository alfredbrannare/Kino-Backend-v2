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
  const backend = new ApiBackend('https://kino-bio-projekt.onrender.com');
  const movieCardGenerator = new MovieCardGenerator(backend);
  movieCardGenerator.CardGenerator(4);
}
