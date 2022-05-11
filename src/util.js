import dayjs from 'dayjs';

const humanizeReleaseDueDate = (dueDate) => dayjs(dueDate).format('YYYY');

const humanizeReleaseFullDueDate = (dueDate) => dayjs(dueDate).format('D MMMM YYYY');

const isFilmInWatchlist = (watchlist) => watchlist === true;

const isFilmWached = (alreadyWatched) => alreadyWatched === true;

const isFilmInFavorite = (favorite) => favorite === true;

export {humanizeReleaseDueDate, humanizeReleaseFullDueDate, isFilmInWatchlist, isFilmWached, isFilmInFavorite};
