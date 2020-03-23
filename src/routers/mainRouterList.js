// 主路由
import Login from '../view/login/Login';
import Layout from '../view/layout/Layout';
// isAuth 需要进行校验，是否进行了登录
export default [
    {path:'/',isExact:false, isAuth:true, name:'layout', component: Layout},
    {path:'/login',isExact:true, isAuth:false, name:'login', component: Login},
]
