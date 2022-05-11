import BoardPresenter from './presenter/board-presenter.js';
import FilmsModel from './model/films-model.js';

const filmsModel = new FilmsModel();
const siteMainElement = document.querySelector('.main');
const boardPresenter = new BoardPresenter();

boardPresenter.init(siteMainElement, filmsModel);
