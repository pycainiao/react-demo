import{createStore} from 'redux';
const storeData = {
    userInfo: {} // 用户信息
}
const reducer = (state= storeData, action) => {
    switch (action.type) {
        case 'addUserInfo': // 新增用户信息
            console.log(action, 'action')
            let data = {...state}
            data.userInfo =  {...action.userInfo};
            return data;
        case 'clearState':
            return {}
        default :
            return state;
    }
}
const store = createStore(reducer);
export default store

