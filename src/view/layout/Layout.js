// 视图层
import React from 'react';
import style from './layout.module.scss'
import {Link,Switch,Route} from "react-router-dom";
import Home from "../home/home";
import DistCar from "../distCar/distCar";
const Layout = (props) => {
    const signOut = () => {
        window.sessionStorage.clear();
        props.history.push('/login');
    };
    return (
        <div className={style['layout-main']}>
            <div className={style['layout-logon']}>头部logo
                <button onClick={signOut}>退出登录</button>
            </div>
            <div className={style['layout-content']}>
                <div className={style['left-route']}>左侧路由
                    <Link t to='/home'>首页</Link>
                    <Link t to='/distCar'>派发清单</Link>
                </div>
                <div className={style['right-main']}>
                    <div className={`${style['right-main-header']} ${style['header-route']}`}>
                        右侧头部路由
                        <Link t to='/home'>首页</Link>
                        <Link t to='/distCar'>派发清单</Link>
                    </div>
                    <main className={style['right-main-content']}>主要渲染内容部分
                        <Switch>
                            <Route path={'/home'} component={Home}></Route>
                            <Route path={'/distCar'} component={DistCar}></Route>
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
