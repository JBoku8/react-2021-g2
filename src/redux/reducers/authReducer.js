import * as types from '../action-types/auth-types';

const initialState = {
  auth: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case types.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };

    case types.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
