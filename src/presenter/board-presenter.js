import {render} from '../render.js';
import SortList from '../view/sorting-list';
import Navigation from '../view/main-navigation';
import ProfileRating from '../view/profile-rating';
import BoardView from '../view/board-view';
import NewShowMoreBtn from '../view/btn-show-more';
import FilmCard from '../view/film-card';
import NumberOfFilms from '../view/number-of-films';
import Popup from '../view/popup.js';


export default class BoardPresenter {
  #filmsModel = null;
  #boardContainer = null;
  #boardFilms = [];

  init = (boardContainer, filmsModel) => {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
    this.#boardFilms = [...this.#filmsModel.films];

    render(new ProfileRating(), document.querySelector('.header'));
    render(new Navigation(), this.#boardContainer);
    render(new SortList(), this.#boardContainer);
    render(new BoardView(), this.#boardContainer);

    for (let i = 0; i < this.#boardFilms.length; i++) {
      this.#renderFilms(this.#boardFilms[i]);
    }

    render(new NewShowMoreBtn(), document.querySelector('.films-list'));
    render(new NumberOfFilms(), document.querySelector('.footer__statistics'));

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
