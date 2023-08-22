const configureStore = require("@reduxjs/toolkit").configureStore;
const logger = require("redux-logger").createLogger();
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
