import { combineReducers } from "redux";
import UserReducer from "./users";

const rootReducer = combineReducers({
  users: UserReducer,
});

export default rootReducer;
