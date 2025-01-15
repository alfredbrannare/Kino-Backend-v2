// vite will now compile our scss
import './styles/styles.scss';
//JS Import
import MobileMenu from './js/MobileMenu.js';
import initLiveEvents from './js/_initLiveEvents.js';

if(document.querySelector('.moviesSecond')) {
const loadingMessage = document.createElement('h4');
loadingMessage.classList.add('movies__message__new');
loadingMessage.innerText = 'Api is starting\nLoading movies... Please wait.';
document.querySelector('.movies__message').appendChild(loadingMessage);
loadingMessage.style.display = 'none';

const backend = new ApiBackend('https://kino-bio-projekt.onrender.com');
console.log('Link to API:' + backend);
const filmList = new LoadAllFilmsPage(backend);
const moviesContainer = document.querySelector('.moviesSecond')

} 

document.addEventListener('DOMContentLoaded', initLiveEvents);
