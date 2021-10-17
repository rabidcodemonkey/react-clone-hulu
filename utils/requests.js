const API_KEY = process.env.API_KEY;

export default {
  // fetchMovieGenres: {
  //   title: 'Movie Genres',
  //   url: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  // },
  // { id: 28, name: 'Action' },
  // { id: 12, name: 'Adventure' },
  // { id: 16, name: 'Animation' },
  // { id: 35, name: 'Comedy' },
  // { id: 80, name: 'Crime' },
  // { id: 99, name: 'Documentary' },
  // { id: 18, name: 'Drama' },
  // { id: 10751, name: 'Family' },
  // { id: 14, name: 'Fantasy' },
  // { id: 36, name: 'History' },
  // { id: 27, name: 'Horror' },
  // { id: 10402, name: 'Music' },
  // { id: 9648, name: 'Mystery' },
  // { id: 10749, name: 'Romance' },
  // { id: 878, name: 'Science Fiction' },
  // { id: 10770, name: 'TV Movie' },
  // { id: 53, name: 'Thriller' },
  // { id: 10752, name: 'War' },
  // { id: 37, name: 'Western' }

  // fetchTvGenres: {
  //   title: 'TV Genres',
  //   url: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  // },
  // { id: 10759, name: 'Action & Adventure' },
  // { id: 16, name: 'Animation' },
  // { id: 35, name: 'Comedy' },
  // { id: 80, name: 'Crime' },
  // { id: 99, name: 'Documentary' },
  // { id: 18, name: 'Drama' },
  // { id: 10751, name: 'Family' },
  // { id: 10762, name: 'Kids' },
  // { id: 9648, name: 'Mystery' },
  // { id: 10763, name: 'News' },
  // { id: 10764, name: 'Reality' },
  // { id: 10765, name: 'Sci-Fi & Fantasy' },
  // { id: 10766, name: 'Soap' },
  // { id: 10767, name: 'Talk' },
  // { id: 10768, name: 'War & Politics' },
  // { id: 37, name: 'Western' }

  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFiMovies: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWesternMovies: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimationMovies: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: 'TV',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
