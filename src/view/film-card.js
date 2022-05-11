import {createElement} from '../render.js';
import {humanizeReleaseDueDate, isFilmInWatchlist, isFilmWached, isFilmInFavorite} from '../util.js';

const createNewFilmCard = (film) => {
  const {id, title, totalRating, release, description, genre, poster, userDetails} = film;

  const date = release.date !== null
    ? humanizeReleaseDueDate(release.date)
    : '';

  const filmInWatchlist = isFilmInWatchlist(userDetails.watchlist)
    ? 'film-card__controls-item--active'
    : '';

  const filmWached = isFilmWached(userDetails.alreadyWatched)
    ? 'film-card__controls-item--active'
    : '';

  const filmFavorite = isFilmInFavorite(userDetails.favorite)
    ? 'film-card__controls-item--active'
    : '';

  return (
    `<article class="film-card" id ="${id}">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${date}</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">5 comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${filmInWatchlist}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${filmWached}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${filmFavorite}" type="button">Mark as favorite</button>
    </div>
  </article>`
  );
};

export default class FilmCard {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createNewFilmCard(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
