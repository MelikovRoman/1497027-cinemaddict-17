import {createElement} from '../render.js';

const createShowMoreBtn = () => ('<button class="films-list__show-more">Show more</button>');

export default class NewShowMoreBtn {
  getTemplate() {
    return createShowMoreBtn();
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
