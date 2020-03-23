import React from 'react';
import './App.css';
import mainRouterList from './routers/mainRouterList';
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom';

function App() {
    let token = window.sessionStorage.getItem('token') || "";
    return (
            <HashRouter>
                <Switch>
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
