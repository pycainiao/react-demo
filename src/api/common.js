import service from '../utils/request';

export const LoginHandle = (params) => {
    return service.post("/Login/WebLogin", params).then(res => {
        return res;
    });
};
export const AdminHandle = (params) => {
    return service.post("/Common_Admin", params).then(res => {
        return res;
    });
};
