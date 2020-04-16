import React from 'react';
import './App.css';
import Layout from './view/layout/Layout';
import {HashRouter,Switch,Route} from 'react-router-dom';
import NotFound from './view/noFound/NotFound';
function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path={'/404'}> <NotFound/></Route>
                <Route path={'/'}> <Layout/></Route>
            </Switch>
        </HashRouter>
    );
}
export default App
