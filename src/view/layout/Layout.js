// 视图层
import React, {useState,useEffect} from 'react';
import style from './layout.module.scss'
import {Link,Switch, useHistory} from "react-router-dom";
import { routerChildrenConfig } from '../../routers/routers';
import FrontendAuth from '../../component/FrontendAuth';
import {connect} from 'react-redux';
import BaseArticlesList from '../../component/BaseArticlesList';
import {getArticles} from '../../api/common';
import dayjs from 'dayjs';
const Layout = (props) => {

    const history = useHistory();
    const isHome = history.location.pathname === '/'; // 是否是首页

    const [articleList, addArticleList] = useState([])
    useEffect( () => {
        console.log('这是layout',history.location.pathname);
        isHome && getArticlesHandle();
    },[history.location.pathname, isHome]); // 只在路由变化的时候,渲染

    const getArticlesHandle = () => {
        getArticles().then(res => {
            console.log(res, '文章列表');
            if (res.code === 200) {
                let data = res.data || [];
                data.forEach(item => {
                    item.createdTime = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss') // 会自动加上本地时差
                    console.log(item.createdTime)
                    item.updatedTime =dayjs(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')
                })
                addArticleList(data)
            } else {
                addArticleList([])
            }
        }).catch(e => {
            // console.log(e)
            addArticleList([])
        })
    }
    return (
        <div className={style['layout-main']}>
            <div className={style['layout-logo']}>
                {/*<button onClick={signOut}>退出登录</button>*/}
                <div className={[style['link-item'],history.location.pathname === '/'?style['is-active']:''].join(' ')}> <Link  to='/'>首页</Link></div>
                <div className={[style['link-item'],history.location.pathname === '/addArticle'?style['is-active']:''].join(' ')}> <Link  to='/addArticle'>新增文章</Link></div>

            </div>
            <div className={style['layout-content']}>
                    <main className={style['main-content']}>
                        <Switch>
                            <FrontendAuth  config={routerChildrenConfig}/>
                        </Switch>
                        {
                            isHome && <div className={style['articles-list']}>
                                <BaseArticlesList articleList={articleList}/>
                            </div>
                        }

                    </main>
            </div>
        </div>
    );
};
const mapStateToProps = ( state) => {
    return {
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout)
// export default Layout;
