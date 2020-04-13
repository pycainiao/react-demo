import{createStore} from 'redux';
const storeData = {
    token: '', // 用户token
}
const reducer = (state= storeData, action) => {
    switch (action.type) {
        case 'addToken':
            let data = {...state}
            data.token =  action.token;
            return data;
        default :
            return state;
    }
}
const store = createStore(reducer);
export default store

