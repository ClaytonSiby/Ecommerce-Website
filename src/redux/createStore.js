import { createStore, applyMiddleware } from 'redux';
import createSagaMiddle from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [logger, sagaMiddleware, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
