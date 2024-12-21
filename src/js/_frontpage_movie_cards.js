export default class MovieCardGenerator {
  constructor() {}

  CardGenerator(count = 1) {
    const moviesList = document.querySelector('.movies__list');

    for (let i = 0; i < count; i++) {
      //Replace with forEach when we get API
      const moviesListItem = document.createElement('li');
      moviesListItem.classList = 'movies__list-item';

      const movieCard = document.createElement('article');
      movieCard.classList = 'movie-card';
      movieCard.setAttribute('aria-label', '${title}');

      const movieCardImage = document.createElement('img');
      movieCardImage.classList = 'movie-card__image';
      movieCardImage.src = 'https://cinemalightboxes.com/cdn/shop/files/The_Grinch_1296x.jpg?v=1727185330'; // Change to image from API when we got it
      movieCardImage.alt = 'Omslag för filmen ${title}'; // Change/modify to `` when we got API
      movieCardImage.setAttribute('aria-hidden', 'false');

      const movieCardTitle = document.createElement('h3');
      movieCardTitle.classList = 'movie-card__title';
      movieCardTitle.textContent = 'The Grinch';

      const movieCardDate = document.createElement('time');
      movieCardDate.classList = 'movie-card__date';
      movieCardDate.setAttribute('aria-label', 'Premiär');
      movieCardDate.textContent = '2000-12-01';

      const movieCardButton = document.createElement('button');
      movieCardButton.classList = 'movie-card__button';
      movieCardButton.textContent = 'Boka biljett';
      movieCardButton.setAttribute('aria-label', 'Boka biljett');

      const movieGenre = document.createElement('span');
      movieGenre.classList = 'movie-card__genre';
      movieGenre.textContent = 'Animation';

      movieCard.appendChild(movieCardImage);
      movieCard.appendChild(movieCardTitle);
      movieCard.appendChild(movieCardDate);
      movieCard.appendChild(movieGenre);
      movieCard.appendChild(movieCardButton);
      moviesListItem.appendChild(movieCard);
      moviesList.appendChild(moviesListItem);
    }
  }
}
