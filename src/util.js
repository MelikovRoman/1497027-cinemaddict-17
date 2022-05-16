import dayjs from 'dayjs';

const humanizeReleaseDueDate = (dueDate) => dayjs(dueDate).format('YYYY');

const humanizeReleaseFullDueDate = (dueDate) => dayjs(dueDate).format('D MMMM YYYY');

const humanizeCommentDate = (dueDate) => dayjs(dueDate).format('YYYY/MM/DD HH:mm');

const isFilmInWatchlist = (watchlist) => watchlist === true;

const isFilmWached = (alreadyWatched) => alreadyWatched === true;

const isFilmInFavorite = (favorite) => favorite === true;

const  getRandomInteger = (min, max) => {
  if (min >= max) {
    return false;
  }
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
};

export {humanizeReleaseDueDate, humanizeReleaseFullDueDate, humanizeCommentDate, isFilmInWatchlist, isFilmWached, isFilmInFavorite, getRandomInteger};
