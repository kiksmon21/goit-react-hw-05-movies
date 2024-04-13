import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrending } from '../../util/TheMovieDBApi';
import { Loader } from 'components/Loader/Loader';

import styles from './Home.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h2 className={styles.Title}>Top Movies for today</h2>
      <ul className={styles.MovieList}>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link className={styles.MovieLink} to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};
export default Home;