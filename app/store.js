const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const cakeSlice = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducer = require('../features/user/userSlice');

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()) 
});

module.exports = store;