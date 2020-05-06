import rootReducer from "./rootReducer";
import inventory from "./data.json";

const INITIAL_STATE = {
  inventory: inventory.products,
  cart: {},
  totalCost: 0.00,
  totalQuantity: 0,
}

const INUSE_STATE = {
  inventory: inventory.products,
  cart: {"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9":1},
  totalCost: 100.00,
  totalQuantity: 1,
}

it("Has initial state", () => {
    expect(rootReducer(INITIAL_STATE, {type:"test"})).toEqual(INITIAL_STATE);
});

it("adds an item", () => {
  expect(rootReducer(INITIAL_STATE, {type:"ADD", id:"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"})).toEqual({
    inventory: inventory.products,
    cart: {"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9":1},
    totalCost: 100.00,
    totalQuantity: 1,
  });
})

it("removes an item", () => {
  expect(rootReducer(INUSE_STATE, {type:"REMOVE", id:"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"})).toEqual(
    INITIAL_STATE);
})