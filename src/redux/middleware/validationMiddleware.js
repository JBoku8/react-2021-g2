import { BLOCKED_ACTION } from '../action-types/middleware-types';

export const validationMiddleware = () => {
  return (next) => {
    return (action) => {
      if (action.type !== BLOCKED_ACTION) {
        next(action);
      } else {
        console.error('invalid action dispatched');
      }
    };
  };
};

export default validationMiddleware;
