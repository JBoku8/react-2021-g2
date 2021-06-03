import * as types from '../action-types/company-types';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
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
