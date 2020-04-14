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
/* 文章提交操作*/
export const ArticleHandle = params => {
    return service.post("/users/add", params).then(res => {
        return res;
    });
}
/*获取用户信息,测试*/
export const getUserInfo = params => {
    return service.get("/users").then(res => {
        return res;
    });
}
