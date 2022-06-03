import {render} from '../render.js';
import SortList from '../view/sorting-list';
import Navigation from '../view/main-navigation';
import ProfileRating from '../view/profile-rating';
import BoardView from '../view/board-view';
import NewShowMoreBtn from '../view/btn-show-more';
import FilmCard from '../view/film-card';
import NumberOfFilms from '../view/number-of-films';
import Popup from '../view/popup.js';
import NoFilmsView from '../view/no-films-view.js';

const FILM_COUNT_PER_STEP = 5;

export default class BoardPresenter {
  #filmsModel = null;
  #boardContainer = null;
  #boardFilms = [];
  #renderedFilmCount = FILM_COUNT_PER_STEP;

  #loadMoreButtonComponent = new NewShowMoreBtn();

  constructor (boardContainer, filmsModel) {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
  }

  init = () => {
    this.#boardFilms = [...this.#filmsModel.films];

    this.#renderBoard();
  };

  #renderBoard = () => {
    render(new ProfileRating(), document.querySelector('.header'));
    render(new Navigation(), this.#boardContainer);

    if (this.#boardFilms.length === 0) {
      render(new NoFilmsView(), this.#boardContainer);
    } else {
      render(new SortList(), this.#boardContainer);
      render(new BoardView(), this.#boardContainer);
    }

    for (let i = 0; i < Math.min(this.#boardFilms.length, FILM_COUNT_PER_STEP); i++) {
      this.#renderFilms(this.#boardFilms[i]);
    }

    if (this.#boardFilms.length > FILM_COUNT_PER_STEP) {
      render(this.#loadMoreButtonComponent, document.querySelector('.films-list'));

      this.#loadMoreButtonComponent.element.addEventListener('click', this.#handleLoadMoreButtonClick);
    }


    render(new NumberOfFilms(), document.querySelector('.footer__statistics'));
  };

  #handleLoadMoreButtonClick = (evt) => {
    evt.preventDefault();
    this.#boardFilms
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((task) => this.#renderFilms(task));

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#boardFilms.length) {
      this.#loadMoreButtonComponent.element.remove();
      this.#loadMoreButtonComponent.removeElement();
    }
  };

  #renderFilms = (film) => {
    const filmComponent = new FilmCard(film);
    const filmPopupComponent = new Popup(this.#boardFilms[1]);

    const openFilmPopup = () => {
      document.querySelector('body').appendChild(filmPopupComponent.element);
    };

    const closeFilmPopup = () => {
      document.querySelector('body').removeChild(filmPopupComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closeFilmPopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    filmComponent.element.addEventListener('click', (evt) => {
      const currentElem = evt.target.closest('.film-card');
      if (currentElem) {
        openFilmPopup();
        document.addEventListener('keydown', onEscKeyDown);
      }
    });

    filmPopupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      closeFilmPopup();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(filmComponent, document.querySelector('.films-list__container'));
  };
}
