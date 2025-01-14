import express from 'express';
import { engine } from 'express-handlebars';
import renderHeader from './src/lib/renderPage.js';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', (request, response) => {
    response.redirect('/kino-bio-projekt');
});

app.use('/kino-bio-projekt', express.static('./dist'));

app.get('/kino-bio-projekt', async (request, response) => {
    const buf = await fs.readFile('./dist/index.html');
    const html = buf.toString();
    response.send(html);
});

app.listen(3080, () => {
    console.log('Server running on http://localhost:3080');
});
