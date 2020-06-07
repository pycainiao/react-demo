/**
 * @Description: 用户的reduce
 * @author Nong
 * @date 2020/6/7
*/
const storeData = {
    userInfo: {} // 用户信息
}
const userReduce = (state= storeData, action) => {
    switch (action.type) {
        case 'addUserInfo': // 新增用户信息
            console.log(action, 'action触发吗')
            let data = {...state}
            data.userInfo =  {...action.userInfo};
            return data;
        case 'clearState':
            return {}
        default :
            return state;
    }
}
export default userReduce;
