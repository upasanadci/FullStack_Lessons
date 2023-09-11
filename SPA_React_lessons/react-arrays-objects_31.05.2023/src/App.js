import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import DisplayProducts from './components/DisplayProducts';
import ManipulatingArrays from './components/ManipulatingArrays';
import ManipulatingObjects from './components/ManipulatingObjects';

function App() {

  const [products, setProducts] = useState([
    {id : 1, name : "Laptop" , price: 999 , quantity : 3},
    {id : 2, name : "Smartphone" , price: 689 , quantity : 4},
    {id : 3, name : "Monitor" , price: 299 , quantity : 2},
  ])

  return (
    <div>
     <ManipulatingArrays/>
     <ManipulatingObjects/>
      <h1>My e-shop</h1>
      <DisplayProducts products={products} setProducts={setProducts}/>
      <AddProduct products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
