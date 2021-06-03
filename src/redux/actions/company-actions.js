import { getFakerCompanies } from '../../services/faker';
import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
} from '../action-types/company-types';

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
