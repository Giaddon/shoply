import React from "react";
import "./Product.css"
import { useDispatch } from "react-redux";
import { ADD, REMOVE } from "./actionTypes";

function Product({ id, name="Microwave", price="100.00", description="Beep!", image_url="https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140" }) {
  const dispatch = useDispatch();

  function addToCart(evt) {
    dispatch({type: ADD, payload: {id, name, price, description, image_url}})
  }

  return (
    <div className="Product">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={addToCart}>Add to cart</button>
      <button>Remove from cart</button>
    </div>
  )
}

export default Product;