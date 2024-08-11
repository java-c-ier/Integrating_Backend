import React, { useState } from "react";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([])


  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setProducts(products.data)
      })
      .catch((err) => console.error(err));
  };

  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  console.log(products);
  
  return (
    <div className="p-[5%]">
      <button onClick={getProducts} className="px-3 py-1 rounded-full bg-blue-500 text-white text-semibold">Get Product</button>

      <br /><br />

      <button onClick={addProducts} className="px-3 py-1 rounded-full bg-blue-500 text-white text-semibold">Add Product</button>

      <hr className="h-0.5 w-11/12 my-10 bg-black" />

      <ul className="flex gap-5 flex-wrap">
        {products.length > 0 ? products.map( p => <li key={p.id} className="w-40 rounded-lg bg-red-300 p-3 truncate">{p.title}</li>) : <h1>Loading...</h1>}
      </ul>
    </div>
  );
}

export default App;
