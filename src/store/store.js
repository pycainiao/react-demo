import{createStore} from 'redux';
const storeData = {
    userInfo: {} // 用户信息
}
const reducer = (state= storeData, action) => {
    switch (action.type) {
        case 'addUserInfo': // 新增用户信息
            let data = {...state}
            data.token =  action.token;
            return data;
        default :
            return state;
    }
}
const store = createStore(reducer);
export default store

