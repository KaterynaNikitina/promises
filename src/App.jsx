import { useEffect, useState } from "react";

import "./App.css";

function goodBadUrl() {
  const PATH =
    "learning-area/javascript/apis/fetching-data/can-store/products.json";
  const GOOD_HOST = "mdn.github.io";
  const BAD_HOST = "badhost.example.com";
  const random = Math.random() * 2;
  console.log(random);
  const host = random < 1 ? BAD_HOST : GOOD_HOST;

  return `https://${host}/${PATH}`;
}

function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;
    console.log("useEffect starts");
    fetch(
      goodBadUrl(), {signal: signal}
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
        if (error.name !== 'AbortError') {
          setError(true);
        }
        
      });

      return () => {
        controller.abort();
      }

  }, []);
console.log(products);
  const list = products.map((product) => (
    <li key={product.name}>{product.name}</li>
  ));
  return (
    <>
      Hello World
      <div>
      {error && ( 
          <div>
            The fetch did not work, there has been an error.
          </div>
        )}
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default App;
