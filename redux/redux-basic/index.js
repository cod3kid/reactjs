const redux = require("redux");
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
// getState method is used to get the current state of the application
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Action dispatched", store.getState());
});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
store.dispatch(orderCake());
console.log("State after unsubscribe", store.getState());

// console.log("New State", store.getState());
