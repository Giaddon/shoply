import React from "react";
import "./Product.css"

/** Product component. Displays information about single product where user can add or remove from cart.
 *    Props:
 *      id: Unique string to identify product. From data.json.
 *      name: String to identify product. From data.json.
 *      price: Number. From data.json.
 *      description: String. From data.json.
 *      image_url: String that is a URL address of image source. From data.json.
 *      add: Function from App that adds item to cart.
 *      remove: function from App that removes item from cart.
 */

function Product({ id, name, price, description, image_url, add, remove }) {
  const image = {
    backgroundImage: `url(${image_url})`,
  }
  function handleAdd() {
    add(id);
  }

  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Product">
      <div className="Product-Image" style={image}></div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={handleAdd}>Add to cart</button>
      <button onClick={handleRemove}>Remove from cart</button>
    </div>
  )
}

export default Product;