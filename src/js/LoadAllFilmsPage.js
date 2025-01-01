import SearchFilter from "./SearchFilter";

export default class LoadAllFilmsPage extends EventTarget {
    constructor(backend) {
        super();
        this.backend = backend;
    }

    async start(listContainer) {
        const filmsFromApi = await this.backend.loadAllFilms();

        this.filter = new SearchFilter('');
        this.filter.addEventListener('change', () => {
            this.update();
        });

        const filterElem = this.filter.render();
        listContainer.append(filterElem);

        const listElem = document.createElement('ul');
        listElem.className = 'movies__list';
        listContainer.append(listElem);

        this.films = filmsFromApi.map(filmData => {
            const filmElem = this.renderFilm(filmData);
            listElem.append(filmElem);
            return { data: filmData, elem: filmElem };
        });
    }

    update() {
        this.films.forEach(({ data, elem }) => {
            const doesMatch = this.filter.doesFilmMatch({ data });
            elem.style.display = doesMatch ? 'block' : 'none';
        });
    }

    renderFilm(data) {
        const movieCard = document.createElement('li');
        movieCard.classList.add('movies__list__elem');

        movieCard.innerHTML = `
        <img src="${data.image}" class="movies__list__elem__image"  alt="${data.title}">
        <h3 class="movies__list__elem__title">${data.title} ${data.year}</h3>
        <p class="movies__list__elem__desc">${data.desc}</p>
        <p class="movies__list__elem__rating">Rating: ${data.rating}</p>
        <p class="movies__list__elem__date">Datum: ${data.date}</p>
        <p class="movies__list__elem__price">Pris: ${data.price}SEK</p>
        <p class="movies__list__elem__seat">Platser: ${data.seatsAvailable}</p>
    `;
        return movieCard;
    }
}
