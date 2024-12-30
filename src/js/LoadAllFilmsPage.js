export default class LoadAllFilmsPage {
    constructor(backend) {
        this.backend = backend;
        this.films = [];
    }

    async add(listElem, loadingElem) {
        try {
            loadingElem.style.display = 'block';

            const challengesFromApi = await this.backend.loadAllFilms();

            challengesFromApi.forEach(filmData => {
                const film = this.render(filmData);
                this.films.push(film);
                listElem.appendChild(film);
            });
        } catch (error) {
            console.error('Error(trying to load film list):', error);
        } finally {
            loadingElem.style.display = 'none';
        }
    }

    render(data) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('allmovies');

        movieCard.innerHTML = `
            <img src="${data.image}" class="allmovies__image"  alt="${data.title}">
            <h3 class="allmovies__title">${data.title} ${data.year}</h3>
            <p class="allmovies__desc">${data.desc}</p>
            <p class="allmovies__rating">Rating: ${data.rating}</p>
            <p class="allmovies__date">Datum: ${data.date}</p>
            <p class="allmovies__price">Pris: ${data.price}SEK</p>
            <p class="allmovies__seat">Platser: ${data.seatsAvailable}</p>
        `;

        return movieCard;
    }
}