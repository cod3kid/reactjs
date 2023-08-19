const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
    payload: null,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  store.dispatch(fetchUsersRequested());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const users = response.data.map((user) => user.name);
      store.dispatch(fetchUsersSuccess(users));
    })
    .catch((ex) => {
      store.dispatch(fetchUsersFailed(ex.message));
    });
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

fetchUsers();
