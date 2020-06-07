import{createStore} from 'redux';
import rootReduce from "./rootReduce/rootReduce";
const store = createStore(rootReduce,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store

