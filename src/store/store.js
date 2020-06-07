import{createStore, applyMiddleware,compose  } from 'redux';
import thunk from "redux-thunk";
import rootReduce from "./rootReduce/rootReduce";
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
    rootReduce,
    enhancer
);
export default store

