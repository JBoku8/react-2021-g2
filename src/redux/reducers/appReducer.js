import * as types from '../action-types';

const initialState = {
  counter: 0,
  message: 'ReactJS Rocks',
  error: null,
  auth: null,
  loading: false,
  companies: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case types.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case types.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case types.RESET_NUMBER:
      return {
        ...state,
        counter: 0,
      };

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

    // companies
    case types.GET_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        companies: null,
      };
    case types.GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        companies: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
