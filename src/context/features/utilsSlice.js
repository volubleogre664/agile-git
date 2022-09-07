const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadRepo: null,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setLoadRepo: (state, action) => {
      state.loadRepo = action.payload;
    },
  },
});

module.exports = utilsSlice;
