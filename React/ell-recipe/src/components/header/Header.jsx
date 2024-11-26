import "./Header.css";

const Header = ({query, setQuery}) => {
  return (
    <div>
      <h1>Recipe App</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
