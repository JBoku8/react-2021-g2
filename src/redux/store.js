import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { appReducer } from './reducers';
import { loggerMiddleware, validationMiddleware } from './middleware';

const middleware = [loggerMiddleware, validationMiddleware];

const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
