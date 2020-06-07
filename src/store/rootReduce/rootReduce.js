/**
 * @Description: 根reduce
 * @author Nong
 * @date 2020/6/7
*/
import {combineReducers} from "redux";
import userReduce from "./userReduce";
import {toDo} from "./todoReduce";

const rootReduce = combineReducers({
    userReduce,
    toDo

})
export default rootReduce
