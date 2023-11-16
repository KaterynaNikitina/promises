import { useEffect, useState } from "react";

import "./App.css";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect starts");
    fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);
console.log(products);
  const list = products.map((product) => (
    <li key={product.name}>{product.name}</li>
  ));
  return (
    <>
      Hello World
      <div>
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default App;
