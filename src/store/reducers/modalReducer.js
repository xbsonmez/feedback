import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants';

const initialState = {
  modalNames: []
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
    {
      if (!state.modalNames.some(modalName => modalName === action.payload)) {
        return {
          ...state,
          modalNames: [...state.modalNames, action.payload],
          [action.payload]: action.props,
        };
      }
      return state;
    }

    case CLOSE_MODAL:
    {
      let newModalNames = state.modalNames.filter(modalName => !(modalName === action.payload));
      let newState = { ...state };
      delete newState[action.payload];
      return {
        ...newState,
        modalNames: newModalNames.length > 1 ? [] : newModalNames,
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
