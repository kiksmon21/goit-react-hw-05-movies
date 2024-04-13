import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <NavLink 
            className={({ isActive }) => isActive ? `${styles.Link} ${styles.Active}` : styles.Link} 
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? `${styles.Link} ${styles.Active}` : styles.Link} 
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
