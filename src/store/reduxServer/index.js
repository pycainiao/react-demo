/**
 * @Description: 测试用的redux-thunk
 * @author Nong
 * @date 2020/6/7
*/
import {login} from "../../api/common";

export const userLoginDis = (params) => {
    return dispatch => {
        login(params).then(res => {
            console.log('thunk', res)
            dispatch({
                type:'addThunkUserInfo',
                userInfo:res.data
            })
        }).catch(e => {
            console.log('thunk', e)
            dispatch({
                type:'addThunkUserInfo',
                userInfo:{"error":"错误的userInfo"}
            })
        })
    }
}
// 这样写的作用是什么呢???
