import ProductRow from "./ProductRow";
import ProductTableCategory from "./ProductTableCategory";

export default function ProductTable({ products, filterString, isStockOnly }) {
  let rows = [];
  let lastCategory = null;
  products.forEach((prod) => {
    if (prod.name.toLowerCase().indexOf(filterString) === -1) {
      return;
    }
    if (isStockOnly && !prod.stocked) {
      return;
    }
    lastCategory !== prod.category && rows.push(<ProductTableCategory category={prod.category} key={prod.category} />);
    rows.push(<ProductRow product={prod} key={prod.name} />);
    lastCategory = prod.category;
  });
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
