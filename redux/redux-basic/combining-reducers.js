const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

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

const orderIcecream = () => {
  return {
    type: ICECREAM_ORDERED,
    quantity: 1,
  };
};

const restockIcecream = (icecream = 10) => {
  return {
    type: RESTOCK_ICECREAM,
    quantity: icecream,
  };
};

initialCakeState = {
  numOfCakes: 10,
};

initialIcecreamState = {
  numOfIcecreams: 25,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.quantity,
      };

    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.quantity,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer);

console.log("initial state", store.getState());
store.dispatch(orderIcecream());
store.dispatch(orderCake());

store.dispatch(restockCake());
store.dispatch(restockIcecream());

console.log("initial state", store.getState());
