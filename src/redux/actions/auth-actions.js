import { SET_AUTH_GUEST, SET_AUTH_USER } from '../action-types/auth-types';

export const setAuthUserAction = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});

export const setAuthGuestAction = () => ({
  type: SET_AUTH_GUEST,
});
