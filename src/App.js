import React from 'react';
import './App.css';
import Layout from './view/layout/Layout';
import {HashRouter,Switch,Route} from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/'}> <Layout/></Route>
            </Switch>

        </HashRouter>
    );
}
export default App
