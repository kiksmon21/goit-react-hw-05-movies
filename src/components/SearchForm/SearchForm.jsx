import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit, children }) => (
  <form className={styles.Form} onSubmit={onSubmit}>{children}</form>
);

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};