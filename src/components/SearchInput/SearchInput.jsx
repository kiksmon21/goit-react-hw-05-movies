import styles from './SearchInput.module.css';

const SearchInput = () => (
  <input className={styles.Input}
    type="text"
    name="movieName"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="May contain only letters, apostrophe, dash and spaces. For example moon"
    required
    autoComplete="off"
    autoFocus
    placeholder="Search movie..."
  />
);

export default SearchInput;