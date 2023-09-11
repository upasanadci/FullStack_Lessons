import React, { useState } from "react";

const AddProduct = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    id: 0,
  });

  const changeHandler = (e) => {
    if (e.target.name == "quantity" || e.target.name == "price") {
      setNewProduct({
        ...newProduct,
        [e.target.name]: parseInt(e.target.value),
        id: products.length + 1,
      });
    } else {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value,
        id: products.length + 1,
      });
    }
  };

  console.log(newProduct);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({
      name: "",
      price: "",
      quantity: "",
      id: 0,
    });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newProduct.name}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={newProduct.price}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="quantity"
          placeholder="quantity"
          value={newProduct.quantity}
          onChange={changeHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;
