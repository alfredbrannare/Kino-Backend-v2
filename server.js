import express from 'express';
import { engine } from 'express-handlebars';
import renderHeader from './src/lib/renderPage.js';
import path from 'path';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');



app.get('/', (request, response) => {
    renderHeader(response, 'index');
});

app.get('/about', (request, response) => {
    renderHeader(response, 'about-us');
});

app.get('/movies', (request, response) => {
    renderHeader(response, 'movies');
});

app.use('/kino-bio-projekt', express.static('./dist'));
app.use('/kino-bio-projekt/assets', express.static('./dist/assets'));

app.listen(3080, () => {
    console.log('Server running on http://localhost:3080');
});
