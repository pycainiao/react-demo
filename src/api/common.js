import service from '../utils/request';


/* 文章提交操作*/
export const ArticleHandle = params => {
    return service.post("/articles/add", params).then(res => {
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
// 获取文章列表
export const getArticles = params => {
    console.log('params',params)
    return service.get('/articles',params).then(res => {
        return res;
    });
}
// 获取单个文章详情
export const getOneArticle = id => {
    return service.get(`/articles/${id}`).then(res => {
        return res;
    })
}
// 删除单个文章
export const deleteArticleByID = id => {
    return service.delete(`/articles/${id}`).then(res => {
        return res;
    })
}
// 修改单个文字
export const editArticleByID = (id,params) => {
    return service.put(`/articles/${id}`, params).then(res => {
        return res;
    })
}

// 上传图片
export const uploadHandle = (params,config) => {
    return service.post('/upload/file',params,config).then(res => {
        return res;
    })
}
