import { AUTO_LOGIN, BLOCKED_ACTION } from '../action-types';

export const blockedAction = () => ({
  type: BLOCKED_ACTION,
});

export const autoLoginAction = () => ({
  type: AUTO_LOGIN,
});
