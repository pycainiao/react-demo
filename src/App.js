import React from 'react';
import './App.css';
import mainRouterList from './routers/mainRouterList';
import Login from "./view/login/Login";
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom';
function App() {
    let token = window.sessionStorage.getItem('token') || "";
    console.log(token, '当前的头肯')
    return (
            <HashRouter>
                <Switch>
                    <Route path={'/login'} component={Login}/>
                    {
                        mainRouterList.map((item,index) => {
                            return <Route key={index} path={item.path} exact={item.isExact} render={ (props) => {
                                return  !item.isAuth ? <item.component {...props}/> : (token ? <item.component {...props}/> :<Redirect to='/login'/> )
                            }
                            }/>
                        })

                    }
                </Switch>
            </HashRouter>
    );
}

export default App;
