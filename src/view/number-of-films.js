import {createElement} from '../render.js';

const createNewNumberOfFilms = () => ('<p>130 291 movies inside</p>');

export default class NumberOfFilms {
  getTemplate() {
    return createNewNumberOfFilms();
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
