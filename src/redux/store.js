import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { appReducer } from './reducers';

const middleware = [logger];

const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
