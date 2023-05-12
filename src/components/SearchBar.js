export default function SearchBar({ filterString, isStockOnly, onStockChange, onFilterChange }) {
  return (
    <form className="search-box">
      <input type="search" placeholder="search" value={filterString} onChange={(e) => onFilterChange(e.target.value)} />
      <br />
      <input type="checkbox" id="check" onChange={(e) => onStockChange(e.target.checked)} />
      <label htmlFor="check" checked={isStockOnly}>
        Only show products in stock
      </label>
    </form>
  );
}
