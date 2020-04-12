import Layout from "../view/layout/Layout"; /*首页*/
import AddArticle from "../view/article/addArticle"; // 新增文章
import Login from "../view/login/Login";
export const routerConfig = [
    {
        path:'/',
        component:Layout,
        auth:false,
        isExact: true,
        name: 'Layout'
    },{
        path:'/AddArticle',
        component:AddArticle,
        auth:true,
        name: 'AddArticle'
    },
    {
        path:'/login',
        component:Login,
        auth:false,
        isExact: true,
        name: 'Login'
    },
]
