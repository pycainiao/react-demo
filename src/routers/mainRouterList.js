// 主路由
import Layout from '../view/layout/Layout';
import NotFound from '../view/noFound/NotFound';
// isAuth 需要进行校验，是否进行了登录
export default [
    {path:'/',isExact:false, auth:false, name:'Layout', component: Layout},
    {path:'/404',isExact:true, auth:false, name:'NotFound', component: NotFound},
]
