import React from "react";
import "./CartData.css"

/** Component to display data about the user's cart 
 *    Props: 
 *      cost: totalNumber from our redux store. The combined cost of all products in cart.
 *      quantity: totalQuantity from our redux store. The combined quantity of all products in cart.
*/

function CartData({ cost, quantity }) {

  return ( 
    <div className="CartData">
      <h5>Your Cart:</h5>
      <p>Total Cost: ${cost}</p>
      <p># of Items: {quantity}</p>
    </div>
  )
}

export default CartData;
