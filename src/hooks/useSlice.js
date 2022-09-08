"use strict";

const { UTILS } = require("../context/types");
const store = require("../context/store");
const utilsSlice = require("../context/features/utilsSlice");

function useUtils() {
  const { setLoadRepo, unsetLoadRepo, setOverlay } = utilsSlice.actions;

  const dispatchUtils = ({ type, payload }) => {
    switch (type) {
      case UTILS.LOAD_REPO.SET:
        store.dispatch(setLoadRepo(payload));
        break;

      case UTILS.LOAD_REPO.UNSET_UTILS:
        store.dispatch(unsetLoadRepo());
        break;

      case UTILS.OVERLAY.SET:
        store.dispatch(setOverlay(payload));
        break;

      default:
        store.dispatch(setLoadRepo(null));
        break;
    }
  };

  return [store.getState().utils, dispatchUtils];
}

module.exports = { useUtils };
