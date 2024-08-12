import React, { useState } from "react";
import axios from "axios";

function Show() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="p-10">
      <button onClick={getProducts} className="px-3 py-1 rounded-full bg-blue-500 text-white text-semibold">Get Products</button>

      <hr className="h-[1.5px] w-11/12 my-5 bg-black"/>

      <ul className="flex gap-5 flex-wrap">
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="w-40 rounded-lg bg-red-300 p-3 truncate">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
}

export default Show;
