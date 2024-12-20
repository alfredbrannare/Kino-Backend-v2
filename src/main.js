// vite will now compile our scss
import './styles/styles.scss';
//JS Import
import MovieCardGenerator from './js/_frontpage_movie_cards.js';

const movieCardGenerator = new MovieCardGenerator();
movieCardGenerator.CardGenerator(4);

