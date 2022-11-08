const { createSlice } = require('@reduxjs/toolkit');
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    oredered: (state) => {
      state.numOfIcecreams--;
    },
    restoked: (state, action) => {
      state.numOfIcecreams += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, state => {
      state.numOfIcecreams--;
    });
  }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;