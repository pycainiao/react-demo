import React from 'react';
import style from '../style/BaseArticles.module.scss'
/**
 * 基本的文章列表
 * @param props
 * @returns {*}
 * @constructor
 */

function BaseArticlesList(props) {
    return (
        <>
            {
                props.articleList.map(item => {
                    return <div key={item._id} className={style['article-main']}>
                        <a className={style['article-link']}>{item.title}</a>
                    <div className={style['article-time']}> 更新时间:{item.updatedTime}</div>
                   </div>
                })
            }
        </>
    );
}

export default BaseArticlesList;
