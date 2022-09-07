"use strict";

const types = require("../context/types");
const store = require("../context/store");
const utils = require("../context/features/utilsSlice");

function useUtils() {
  const { setLoadRepo } = utils.actions;

  const dispatchUtils = ({ type, payload }) => {
    switch (type) {
      case types.UTILS:
        store.dispatch(setLoadRepo(payload));
        break;

      default:
        store.dispatch(setLoadRepo(null));
        break;
    }
  };

  return [store.getState().utils, dispatchUtils];
}

module.exports = { useUtils };
