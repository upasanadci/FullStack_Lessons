import React from "react";

const DisplayProducts = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    console.log(id);

    const filteredProducts = products.filter((item) => item.id !== id);

    setProducts(filteredProducts);
  };

  const updateQuantity = (id, what) => {
    if (what == "increase") {
      const updatedProducts = products.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setProducts(updatedProducts);
    } else {
      // decrease
      const updatedProducts = products.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id} className="product">
              <h3>name : {item.name}</h3>
              <h3>Price : {item.price} &euro;</h3>
              <h3>
                Quantity : {item.quantity}{" "}
                <button onClick={() => updateQuantity(item.id, "increase")}>
                  +
                </button>
                <button onClick={() => updateQuantity(item.id, "decrease")}>
                  -
                </button>
              </h3>
              <h3>
                <button onClick={() => deleteProduct(item.id)}>Delete</button>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayProducts;
