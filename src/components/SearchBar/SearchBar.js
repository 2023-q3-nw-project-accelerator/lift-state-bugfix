import "./SearchBar.css";

const SearchBar = ({ handleChange, input }) => {
  // remove state and handle change and prop setFilteredItems from searchBar
  // add the handle change prop here

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
