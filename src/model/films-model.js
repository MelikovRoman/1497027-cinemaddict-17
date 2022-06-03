import {generateFilm} from '../mock/film.js';

export default class FilmsModel {
  #films = Array.from({length: 20}, generateFilm);

  get films() {
    return this.#films;
  }
}
