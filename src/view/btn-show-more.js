import {createElement} from '../render.js';

const createShowMoreBtn = () => ('<button class="films-list__show-more">Show more</button>');

export default class NewShowMoreBtn {
  #element = null;

  get template() {
    return createShowMoreBtn();
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
