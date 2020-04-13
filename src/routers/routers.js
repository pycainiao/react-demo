
import AddArticle from "../view/article/addArticle"; // 新增文章
import Login from "../view/login/Login";
import NotFound from '../view/noFound/NotFound';
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
    }, {
        path:'/addArticle',
        component:AddArticle,
        auth:true,
        isExact: true,
        name: 'AddArticle' ,
    },
    {
        path:'/404',
        component:NotFound,
        auth:false,
        isExact: true,
        name: 'NotFound' ,
    },
]
