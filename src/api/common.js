import service from '../utils/request';


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
// 登录
export const login = params => {
    return service.post("/users/login", params).then(res => {
        return res;
    });
}
