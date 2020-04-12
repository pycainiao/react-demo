import React from 'react';
import './App.css';
// import mainRouterList from './routers/mainRouterList';
// import store from './store/store';
// import { Provider } from 'react-redux';
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { routerConfig } from "./routers/routers";
import FrontendAuth from "./component/FrontendAuth";
import Login from "./view/login/Login";
import Layout from "./view/layout/Layout";
import AddArticle from "./view/article/addArticle";
let a = {
    path:'/AddArticle',
    component:AddArticle,
    auth:true,
    name: 'AddArticle'
}
function App() {
    return (
        // <Provider store={store}>
            <HashRouter>
                <Switch>
                    {/*{*/}
                    {/*    mainRouterList.map((item,index) => {*/}
                    {/*        return <Route key={index} path={item.path} exact={item.isExact} render={ (props) => {*/}
                    {/*            return  !item.isAuth ? <item.component {...props}/> : (window.sessionStorage.getItem('token') ? <item.component {...props}/> : <Redirect to='/login'/>)*/}
                    {/*            // return  !item.isAuth ? <item.component {...props}/> : (data.token ? <item.component {...props}/> : <Redirect to='/login'/>)*/}
                    {/*        }*/}
                    {/*        }/>*/}
                    {/*    })*/}

                    {/*}*/}

                    { // routerConfig.map(item => {
                        //      if (!item.auth) {
                        //          return <Route key={item.name} path={item.path} exact={item.isExact} component={item.component}/>
                        //      } else {
                        //          return <FrontendAuth key={item.name}  config={item}/>
                        //      }
                        // })}
                    }
                    {/*<FrontendAuth config={routerConfig}/>*/}
                    {/*    <Route path='/' exact component={Layout}/>*/}
                        <Route path='/login' exact component={Login}/>
                    {/*<FrontendAuth   path={'/AddArticle'}  config={a}/>*/}
                </Switch>
            </HashRouter>
      //  </Provider>

    );
}
const getToken = (state) => {
        console.log('难道是这压力?')
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
// export default connect(getToken)(App);
export default App
