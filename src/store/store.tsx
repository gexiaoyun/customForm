import { createStore, applyMiddleware } from 'redux'; 
import reducer from '../redux/reducers';
// import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import rootSaga from '../redux/rootSaga';
// import config from '../config';

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];
const store = createStore(reducer, applyMiddleware(logger)); 

// sagaMiddleware.run(rootSaga);

// config.setDefaultConfig();

export default store;