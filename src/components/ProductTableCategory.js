export default function ProductTableCategory({ category }) {
  return (
    <tr className="category-heading">
      <th colSpan="2">{category}</th>
    </tr>
  );
}
