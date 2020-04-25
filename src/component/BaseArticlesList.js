import React from 'react';
import style from '../style/BaseArticles.module.scss'
import {Link} from 'react-router-dom';
/**
 * 基本的文章列表
 * @param props
 * @returns {*}
 * @constructor
 */

function BaseArticlesList(props) {
    const timeStyle = {
            display: 'flex',
    }
    return (
        <>
            {
                props.articleList.map(item => {
                    return <div key={item._id} className={style['article-main']}>
                        <Link className={style['article-link']} to={`/article/${item._id}`}>{item.title}</Link>
                        <div style={timeStyle}>
                            <div className={style['article-time']}> 发布时间:{item.createdTime}</div>
                            <div className={style['article-time']}> 更新时间:{item.updatedTime}</div>
                        </div>
                   </div>
                })
            }
        </>
    );
}

export default BaseArticlesList;
