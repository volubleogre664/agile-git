const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loadRepo: null,
  isOverlay: false,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setLoadRepo: (state, action) => {
      state.loadRepo = action.payload;
    },
    unsetLoadRepo: (state) => {
      state.loadRepo = null;
    },
    setOverlay: (state, action) => {
      state.isOverlay = !state.isOverlay;
      document.querySelector(".app__overlay").classList.toggle("active");
    },
  },
});

module.exports = utilsSlice;
