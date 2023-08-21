import './SearchBar.css';

const SearchBar = ({ input, handleChange }) => {

  return (
    <div className="SearchBar">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search by item name"
      />
    </div>
  );
};

export default SearchBar;
