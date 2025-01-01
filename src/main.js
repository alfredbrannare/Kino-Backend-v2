// vite will now compile our scss
import './styles/styles.scss';
//JS Import
import MovieCardGenerator from './js/_frontpage_movie_cards.js';
import LoadAllFilmsPage from './js/LoadAllFilmsPage.js';
import ApiBackend from './js/ApiBackend.js';

if(document.querySelector('.movies')) {
const loadingMessage = document.createElement('h4');
loadingMessage.classList.add('movies__message__new');
loadingMessage.innerText = 'Api is starting\nLoading movies... Please wait.';
document.querySelector('.movies__message').appendChild(loadingMessage);
loadingMessage.style.display = 'none';

const backend = new ApiBackend('https://kino-bio-projekt.onrender.com');
console.log('Link to API:' + backend);
const filmList = new LoadAllFilmsPage(backend);
const moviesContainer = document.querySelector('.movies')

filmList.start(moviesContainer, loadingMessage);


} else{
const movieCardGenerator = new MovieCardGenerator();
movieCardGenerator.CardGenerator(4);
}