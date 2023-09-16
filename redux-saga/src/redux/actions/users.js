export const Types = {
  GET_USERS_REQUEST: "users/get-users-request",
  GET_USERS_SUCCESS: "users/get-users-success",
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});
