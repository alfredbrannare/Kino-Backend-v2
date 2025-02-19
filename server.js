import express from 'express';
import { engine } from 'express-handlebars';
import getHeaderFooterData from './src/lib/renderPage.js';
import { loadMovies } from './src/lib/movies.js';
import { loadMovie } from './src/lib/movies.js';
import Handlebars from 'handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

Handlebars.registerHelper('limit', function(array, limit){
    return array.slice(0, limit);
});

app.get('/', async (request, response) => {
    const movies = await loadMovies();
    const pageData = getHeaderFooterData('index');
    response.render('index', { movies, limitMovies: true, ...pageData });
});

app.get('/about', (request, response) => {
    const pageData = getHeaderFooterData('about-us');
    response.render('about-us', pageData);
});

app.get('/movies', async (request, response) => {
    const movies = await loadMovies();
    const pageData = getHeaderFooterData('movies');
    response.render('movies', { movies, ...pageData });
});

app.get('/movie/:movieId', async (request, response) => {
    const movie = await loadMovie(request.params.movieId);
    const pageData = getHeaderFooterData('movie');
    response.render('movie', { movie, ...pageData });
});

app.use('/kino-bio-projekt', express.static('./dist'));
app.use('/kino-bio-projekt/assets', express.static('./dist/assets'));

app.listen(5080, () => {
    console.log('Server running on http://localhost:5080');
});
