import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.main');
const boardPresenter = new BoardPresenter();

boardPresenter.init(siteMainElement);
