import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { searchMovies } from '../../util/TheMovieDBApi';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { SearchBar } from './../../components/SearchBar/SearchBar';

import styles from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'No movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>There is no movies with this request. Please, try again</p>}
      <ul className={styles.MovieList}>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link className={styles.MovieLink} to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </Link>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};

export default Movies;