import "./App.css";
import FiltarableProductTable from "./components/FiltarableProductTable";

function App() {
  const appStyel = {
    display: "flex",
    justifyContent: "center",
  };
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const prods = PRODUCTS.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return 0;
  });

  return (
    <div style={appStyel}>
      <FiltarableProductTable productso={prods} />
    </div>
  );
}

export default App;
