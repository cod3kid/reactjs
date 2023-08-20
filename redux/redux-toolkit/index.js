const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
console.log("Initial State ", store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(20));
