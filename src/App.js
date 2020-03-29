import React from 'react';
import './App.css';
import mainRouterList from './routers/mainRouterList';
// import store from './store/store';
// import { Provider } from 'react-redux';
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
function App(data) {
    return (
        // <Provider store={store}>
            <HashRouter>
                <Switch>
                    {
                        mainRouterList.map((item,index) => {
                            return <Route key={index} path={item.path} exact={item.isExact} render={ (props) => {
                                return  !item.isAuth ? <item.component {...props}/> : (window.sessionStorage.getItem('token') ? <item.component {...props}/> : <Redirect to='/login'/>)
                                // return  !item.isAuth ? <item.component {...props}/> : (data.token ? <item.component {...props}/> : <Redirect to='/login'/>)
                            }
                            }/>
                        })

                    }
                </Switch>
            </HashRouter>
        // </Provider>

    );
}
const getToken = (state) => {
       return {
           token: state.token
       }
}
/*为什么这样写。当点击登录的时候，路由就能跳转呢。奇怪 什么时候渲染的呢*/
/* 2020年3月29日21:54:17.解释:
*  这是因为相当于响应了一个props..所以能实现登录后,路由渲染
* 以上2种方法都可以
*
* */
export default connect(getToken)(App);
