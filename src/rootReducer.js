import inventory from "./data.json";
import { ADD, REMOVE } from "./actionTypes";

const INITIAL_STATE = {
  inventory: inventory.products,
  cart: {},
  totalCost: 0.00,
  totalQuantity: 0,
}

/** Reducer to manage redux store.
 */
function rootReducer(state=INITIAL_STATE, action) {
  
  switch (action.type) {
    case ADD: {
      // Use product ID to lookup price.
      const price = state.inventory[action.id].price;
      const newCart = {...state.cart};
      newCart[action.id] = (newCart[action.id] || 0 ) + 1;
      return {...state, 
              cart: newCart, 
              totalQuantity: state.totalQuantity + 1, 
              totalCost: Number((state.totalCost + price).toFixed(2))};
    }

    case REMOVE: {
      const price = state.inventory[action.id]["price"];
      const newCart = {...state.cart};
      if (!newCart[action.id]) return state;
      if (newCart[action.id] === 1) {
        delete newCart[action.id];
        return {...state, 
                cart: newCart, 
                totalQuantity: state.totalQuantity - 1, 
                totalCost: Number((state.totalCost - price).toFixed(2))};
      } else {
        newCart[action.id] = newCart[action.id] - 1;
        return {...state, 
                cart: newCart, 
                totalQuantity: state.totalQuantity - 1, 
                totalCost: Number((state.totalCost - price).toFixed(2))};
      }  
    }
    default:
      return state;
  }
  
}

export default rootReducer;