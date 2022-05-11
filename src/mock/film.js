export const generateFilm = () => ({
  id: '0',
  ///comments: [
  //$Comment.2$, $Comment.id$
  //],
  title: 'A Little Pony Without The Carpet',
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: 5.3,
  poster: 'popeye-meets-sinbad.png',
  ageRating: 0,
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    'Morgan Freeman'
  ],
  release: {
    date: '2019-05-11T00:00:00.000Z',
    releaseCountry: 'Finland'
  },
  runtime: 77,
  genre: [
    'Comedy'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  ,
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});

export const generateComment = () => ({
  id: '0',
  author: 'Ilya O\'Reilly',
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  date: '2019-05-11T16:12:32.554Z',
  emotion: 'smile'
});
