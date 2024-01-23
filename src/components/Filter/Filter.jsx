import css from '../ContactElement/ContactElement.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.nameLabel}>
        Find contacts by name
        <input type="text" name="filter" onChange={onChange} value={value} />
      </label>
    </div>
  );
};

export default Filter;
