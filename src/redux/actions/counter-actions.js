import {
  ADD_NUMBER,
  SUBTRACT_NUMBER,
  RESET_NUMBER,
} from '../action-types/counter-types';

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
