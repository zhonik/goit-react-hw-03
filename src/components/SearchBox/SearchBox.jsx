import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.serchBox}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.field}
        type='text'
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
