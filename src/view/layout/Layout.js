// 视图层
import React, {useState,useEffect} from 'react';
import style from './layout.module.scss'
import {Link,Switch, useHistory} from "react-router-dom";
import { routerChildrenConfig } from '../../routers/routers';
import FrontendAuth from '../../component/FrontendAuth';
import {connect} from 'react-redux';

const Layout = (props) => {
    console.log('layout多次吗',props)
    const history = useHistory();
    const signOut = () => {
        window.sessionStorage.clear();
        getToken('')
        history.push('/'); // 跳转首页
    };
    const [token,getToken] = useState(props.token);
    useEffect( () => {
        console.log('这是layout')
    });
    const beginLogin = () => {
        window.sessionStorage.setItem('token', 'FTokenID');
        getToken('FTokenID')
        props.addTokenHandle('FTokenID')
    }
    return (
        <div className={style['layout-main']}>
            <div className={style['layout-logo']}>
                {/*<button onClick={signOut}>退出登录</button>*/}
                <Link  to='/'>首页</Link>
                <Link  to='/addArticle'>新增文章</Link>
                {/*<Link  to='/login'>登录</Link>*/}
                <button onClick={beginLogin}>登录</button>
            </div>

            <div className={style['layout-content']}>
                    <main className={style['main-content']}>主要渲染内容部分
                        <Switch>
                            <FrontendAuth  config={routerChildrenConfig}/>
                        </Switch>
                    </main>
            </div>
        </div>
    );
};
const mapStateToProps = ( state) => {
    return {
        token: state.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTokenHandle: (token) => {
            console.log('添加')
            dispatch({
                    type:'addToken',
                    token:token
                })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout)
// export default Layout;
