const { configureStore } = require("@reduxjs/toolkit");
const utils = require("./features/utilsSlice");

module.exports = configureStore({
  reducer: {
    utils: utils.reducer,
  },
});
