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
  init = (boardContainer) => {
    render(new ProfileRating(), document.querySelector('.header'));
    render(new Navigation(), boardContainer);
    render(new SortList(), boardContainer);
    render(new BoardView(), boardContainer);

    for (let i = 0; i < 5; i++) {
      render(new FilmCard(), document.querySelector('.films-list__container'));
    }

    render(new NewShowMoreBtn(), document.querySelector('.films-list'));
    render(new NumberOfFilms(), document.querySelector('.footer__statistics'));
    render(new Popup(), document.querySelector('body'));
  };
}
