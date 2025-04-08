import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, setNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(setNameFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
