import React from 'react';
import './App.css';
import mainRouterList from './routers/mainRouterList';
import store from './store/store';
import { Provider } from 'react-redux';
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom';
function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    {
                        mainRouterList.map((item,index) => {
                            return <Route key={index} path={item.path} exact={item.isExact} render={ (props) => {
                                return  !item.isAuth ? <item.component {...props}/> : (window.sessionStorage.getItem('token') ? <item.component {...props}/> : <Redirect to='/login'/>)
                            }
                            }/>
                        })

                    }
                </Switch>
            </HashRouter>
        </Provider>

    );
}
/*为什么这样写。当点击登录的时候，路由就能跳转呢。奇怪 什么时候渲染的呢*/
export default App;
