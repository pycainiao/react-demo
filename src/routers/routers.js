
import AddArticle from "../view/article/addArticle"; // 新增文章
import Login from "../view/login/Login";
/*
* 子路由渲染
* */
export const routerChildrenConfig = [
    {
        path:'/login',
        component:Login,
        auth:false,
        isExact: true,
        name: 'Login' ,
    },
    {
        path:'/addArticle',
        component:AddArticle,
        auth:true,
        isExact: true,
        name: 'AddArticle' ,
    },
]
