// 主路由
import Login from '../view/login/Login';
import Layout from '../view/layout/Layout';
// isAuth 需要进行校验，是否进行了登录
export default [
    {path:'/login',isExact:true, isAuth:false, name:'login', component: Login}, // 放在前面，可以第一时间渲染这个组件
    {path:'/',isExact:false, isAuth:true, name:'layout', component: Layout},
]
