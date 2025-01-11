import express from 'express';
import fs from 'fs/promises'

const app = express();

app.get('/', async (request, response) => {
    const buf = await fs.readFile('./dist/index.html');
    const html = buf.toString();
    response.send(html);
});

app.get('/:name', async (request, response) => {
    const buf = await fs.readFile('./dist/index.html');
    const html = buf.toString();
    const name = request.params.name;

    const changedHtml = html.replace('Kino', name);

    response.send(changedHtml);
});

app.use('/kino-bio-projekt/assets', express.static('./dist/assets'));

app.listen(3080);