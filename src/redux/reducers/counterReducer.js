import * as types from '../action-types/counter-types';

const initialState = {
  value: 0,
  message: 'ReactJS Rocks',
  error: null,
  loading: false,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case types.ADD_NUMBER:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case types.SUBTRACT_NUMBER:
      return {
        ...state,
        value: state.value - action.payload,
      };

    case types.RESET_NUMBER:
      return {
        ...state,
        value: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
