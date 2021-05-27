/* eslint-disable object-curly-newline */
import { getFakerCompanies } from '../../services/faker';
import {
  ADD_NUMBER,
  SUBTRACT_NUMBER,
  RESET_NUMBER,
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
} from '../action-types/common-types';

export const addNumberAction = (payload) => ({
  type: ADD_NUMBER,
  payload,
});

export const subtractNumberAction = (payload) => ({
  type: SUBTRACT_NUMBER,
  payload,
});

export const resetNumberAction = () => ({
  type: RESET_NUMBER,
});

// companies
export const getCompaniesRequest = () => ({
  type: GET_COMPANIES_REQUEST,
});

export const getCompaniesSuccess = (payload) => ({
  type: GET_COMPANIES_SUCCESS,
  payload,
});

export const getCompaniesFailure = (payload) => ({
  type: GET_COMPANIES_FAILURE,
  payload,
});

export const getCompaniesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(getCompaniesRequest());
      const companies = await getFakerCompanies(5);
      dispatch(getCompaniesSuccess(companies));
    } catch (error) {
      dispatch(getCompaniesFailure(error));
    }
  };
};
