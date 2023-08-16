const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const restockCake = (cakes = 5) => {
  return {
    type: RESTOCK_CAKE,
    quantity: cakes,
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

    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
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

store.dispatch(restockCake(10));
console.log("State after restocking", store.getState());

// console.log("New State", store.getState());

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
console.log("State after bindActionCreators", store.getState());
