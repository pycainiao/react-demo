// 视图层
import React, {useState,useEffect} from 'react';
import style from './layout.module.scss'
import {Link,Switch,Route} from "react-router-dom";
import childrenRouters from "../../routers/childrenRouters";

const Layout = (props) => {
    const signOut = () => {
        window.sessionStorage.clear();
        props.history.push('/login');
    };
    // const activeRoutes = [];
    const [activeRoutes,addRouteHandle] = useState([]); // 为什么不触发更新呢？  第一次
    useEffect( () => {
        console.log('这是layout')
        console.log('更新了吗')
    });
    // 添加路由
    const addRouter = (routerParams) => {
        console.log(routerParams, 'routerParams');
        console.log(activeRoutes, 'activeRoutes')

        let isAdd = true;
        for (let item of activeRoutes) {
            if (item.pathname === routerParams.pathname) {
                console.log('有')
                isAdd = false;
                break;
            }
        }
        if (isAdd) {
            // 添加路由
            console.log('添加了');
            activeRoutes.push(routerParams);
            addRouteHandle([...activeRoutes]); /* 这里不能直接push   这样写addRouteHandle(push(activeRoutes)) 会是 undefined。因为push返回的是一个undefined。so*/
            console.log(activeRoutes, '添加后的')
        }
    };

    return (
        <div className={style['layout-main']}>
            <div className={style['layout-logon']}>头部logo
                <button onClick={signOut}>退出登录</button>
            </div>
            <div className={style['layout-content']}>
                <div className={style['left-route']}>左侧路由
                    <Link  to='/home'>首页</Link>
                    <Link  to='/distCar'>派发清单</Link>
                </div>
                <div className={style['right-main']}>
                    <div className={`${style['right-main-header']} ${style['header-route']}`}>
                        {
                            activeRoutes.map((item,index) => {
                                return <Link key={index} to={item.pathname}>{item.pathname}</Link>
                            })
                        }
                    </div>
                    <main className={style['right-main-content']}>主要渲染内容部分
                        <Switch>
                            {
                                childrenRouters.map((item,index) => {
                                    return <Route key={index} path={item.path} exact={item.isExact}
                                                  render={props => {
                                                     return <item.component addRouter={addRouter}  {...props}/>
                                                  }
                                                  }/>
                                })
                            }
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
