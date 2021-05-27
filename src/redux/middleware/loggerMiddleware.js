export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.group('[loggerMiddleware]');
      console.log('OLD STATE', store.getState());
      console.log('ACTION', action.type);
      next(action);
      console.log('NEW STATE', store.getState());
      console.groupEnd();
    };
  };
};

export default loggerMiddleware;
