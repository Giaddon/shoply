import React from 'react';
import './App.css';
import Product from './Product';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { add, remove } from "./actions";
import CartData from './CartData';

/** Primary App component.
 *    Redux Store:
 *      cart: an object with {id:quantity} of products the user has added to cart
 *      inventory: An object of objects from data.json.
 *      totalCost: A number derived from summing the price of all products in cart
 *      totalQuantity: A number derived from summing the quantity of all products in cart
 */

function App() {
  const { cart, inventory, totalCost, totalQuantity } = 
    useSelector(state => ({cart: state.cart, 
                           inventory: state.inventory, 
                           totalCost: state.totalCost, 
                           totalQuantity: state.totalQuantity}), 
    shallowEqual
  );
  const dispatch = useDispatch();

  function addToCart(id) {dispatch(add(id));}
  function removeFromCart(id) {dispatch(remove(id));}

  console.log("Cart: ", cart);

  //map over Object.values(inventory)
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
                    add={addToCart}
                    remove={removeFromCart}
                  />);
  }

  return (
    <div className="App">
      <CartData cost={totalCost} quantity={totalQuantity} />
      {stock}
    </div>
  );
}

export default App;
