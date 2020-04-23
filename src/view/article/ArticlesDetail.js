import React from 'react';
import {Route} from 'react-router-dom';
import OneArticleDetail from './OneArticleDetail';
/**
 * 单个文章详情
 * @param props
 * @returns {*}
 * @constructor
 */
function ArticlesDetail(props) {
    return (
        <div>
            <Route exact={true} path={`/article/:id`}>
                <OneArticleDetail/>
            </Route>
        </div>
    );
}

export default ArticlesDetail;
