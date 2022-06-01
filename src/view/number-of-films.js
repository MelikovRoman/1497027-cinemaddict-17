import {createElement} from '../render.js';

const createNewNumberOfFilms = () => ('<p>130 291 movies inside</p>');

export default class NumberOfFilms {
  #element = null;

  get template() {
    return createNewNumberOfFilms();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
