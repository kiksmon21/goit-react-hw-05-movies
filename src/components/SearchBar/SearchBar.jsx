import { BsSearch } from 'react-icons/bs';
import SearchForm from '../SearchForm/SearchForm';
import SearchInput from '../SearchInput/SearchInput';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => (
  <div className={styles.SearchBox}>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <button className={styles.ButtonIcon} type="submit" aria-label="search button">
        <BsSearch />
      </button>
    </SearchForm>
  </div>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};