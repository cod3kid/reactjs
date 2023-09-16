import { Types } from "../actions/users";
import { getUsersRequest, getUsersSuccess } from "../actions/users";

const INITIAL_STATE = {
  items: [],
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { items: action.payload.items };
    default:
      return state;
  }
};

export default userReducer;
