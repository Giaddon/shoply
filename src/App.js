import React from 'react';
import './App.css';
import Product from './Product';
import { useSelector, shallowEqual } from "react-redux"

function App() {
  const { cart, inventory } = useSelector(
    state => ({cart: state.cart, inventory: state.inventory}), shallowEqual
  );

  console.log("Cart: ", cart);

  let stock = [];
  for (let item in inventory) {
    let product = inventory[item];
    stock.push(<Product 
                    key={item}
                    id={item} 
                    name={product.name} 
                    description={product.description}
                    price={product.price}
                    image_url={product.image_url}  
                  />);
  }

  return (
    <div>
      {stock}
    </div>
  );
}

export default App;
