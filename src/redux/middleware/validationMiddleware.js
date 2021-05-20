export const validationMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.group('[validationMiddleware]');
      if (action.type !== 'BLOCKED_ACTION') {
        console.log('OLD STATE', store.getState());
        console.log('ACTION', action);
        next(action);
        console.log('NEW STATE', store.getState());
      } else {
        console.error('invalid action dispatched');
      }
      console.groupEnd();
    };
  };
};

export default validationMiddleware;
