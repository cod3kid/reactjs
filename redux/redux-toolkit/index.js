const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State ", store.getState());
// store.subscribe(() => console.log(store.getState()));

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(20));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(5));
