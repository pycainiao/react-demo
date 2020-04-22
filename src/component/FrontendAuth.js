// 路由校验组件
import React, {Component} from 'react';
import { Route,Redirect } from 'react-router-dom';
// 为什么每次都能渲染这个组件呢,而且,还是多次呢
class FrontendAuth extends Component {
    render(){
        const { location,config } = this.props;
        const { pathname } = location;
        const isLogin = window.sessionStorage.getItem('token');
        const targetRouterConfig = config.find((v) => {
            let routerTem = pathname.split('/'); // 转成数组,只交易第二个参数,主路由是否相等['','acv'] 嵌套路由的话,是这样:['','abc','qw']
            return ('/'+routerTem[1]) === v.path // 先这样写.目前还没有好的嵌套思路
        });
        // 不需要校验的路由
        if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
            const { component } = targetRouterConfig;
            return <Route exact={targetRouterConfig.isExact} path={pathname} component={component} />
        }
        if (pathname === '/') {
            // 说明是跳转首页,那就直接跳转首页
            return <Redirect to='/' />
        }
        if(isLogin){
            // 如果是登陆状态，想要跳转到登陆，重定向到主页
            // if(pathname === '/login'){
            //     return <Redirect to='/' />
            // }else{
                // 如果路由合法，就跳转到相应的路由
                if(targetRouterConfig){
                    return <Route path={pathname} exact={targetRouterConfig.isExact} component={targetRouterConfig.component} />
                }else{
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect to='/404' />
                }
            // }
        }else{
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到首页,同时提示登录
            if(targetRouterConfig && targetRouterConfig.auth){
                console.log('跳转登录页')
                return <Redirect to='/login' />
            }else{
                // 非登陆状态下，路由不合法时，重定向至 404
                console.log('404')
                return <Redirect to='/404' />
            }
        }
    }
}

export default FrontendAuth;
