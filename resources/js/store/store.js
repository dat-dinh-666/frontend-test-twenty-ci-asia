import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' && process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducers, enhancer);

export default store;
