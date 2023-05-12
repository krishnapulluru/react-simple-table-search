import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
export default function FiltarableProductTable({ productso }) {
  const [filterString, setFilterString] = useState("");
  const [stockProducts, setStockProducts] = useState(false);

  return (
    <div className="app">
      <SearchBar
        filterString={filterString}
        isStockOnly={stockProducts}
        onStockChange={setStockProducts}
        onFilterChange={setFilterString}
      ></SearchBar>
      <ProductTable
        filterString={filterString}
        isStockOnly={stockProducts}
        products={productso}
        onStockChange={setStockProducts}
        onFilterChange={setFilterString}
      ></ProductTable>
    </div>
  );
}
