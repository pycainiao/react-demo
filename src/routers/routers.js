
import AddOrEditArticle from "../view/article/AddOrEditArticle"; // 新增文章
import Login from "../view/login/Login";
import ArticlesDetail from '../view/article/ArticlesDetail';
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
        component:AddOrEditArticle,
        auth:true,
        isExact: true,
        name: 'AddOrEditArticle' ,
    },
    {
        path:'/article',
        component:ArticlesDetail,
        auth:false,
        isExact: false,
        name: 'ArticlesDetail' ,
    },
]
