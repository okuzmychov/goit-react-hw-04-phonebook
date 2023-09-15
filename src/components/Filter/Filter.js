import { FilterForm } from './Filter.styled';

export const Filter = ({ onFilterChange, value }) => {
  return (
     <FilterForm>
      <label htmlFor="find">Find contacts by name:</label>
      <input type="text" value={value}
        onChange={evt => onFilterChange(evt.target.value)} />
    </FilterForm>
  );
};