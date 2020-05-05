import inventory from "./data.json";
import { ADD, REMOVE } from "./actionTypes";

const INITIAL_STATE = {
  inventory: inventory.products,
  cart: [],
}

// ask if we want unique action types for each case rather than doing the logic here 
//(do the logic in the action creator)

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      let addProduct = state.cart.find(p => p.id === action.payload.id)
      if (addProduct) {
        const adjustedProduct = {...addProduct, quantity: addProduct.quantity + 1};
        let newCart = state.cart.filter(p => p.id !== action.payload.id)
        return {...state, cart: [...newCart, adjustedProduct]};
      } else {
        let newCart = [...state.cart, {...action.payload, quantity: 1}]
        return {...state, cart: newCart };
      }

    case REMOVE:
      let removeProduct = state.cart.find(p => p.id === action.payload.id)
      if (removeProduct.quantity > 1) {
        const adjustedProduct = {...removeProduct, quantity: removeProduct.quantity - 1};
        let newCart = state.cart.filter(p => p.id !== action.payload.id)
        return [...newCart, adjustedProduct];
      } else {
        return state.cart.filter(p => p.id !== action.payload.id);
      }

    default:
      return state;
  }
  
}

export default rootReducer;