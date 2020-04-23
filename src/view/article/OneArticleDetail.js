import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getOneArticle} from '../../api/common';
import dayjs from 'dayjs';
import style from './OneArticleDetail.module.scss'
/**
 * 文章详情
 * @param props
 * @returns {*}
 * @constructor
 */
function OneArticleDetail(props) {
    const [articleData,addArticleData]  = useState({})
    let { id } = useParams();
    console.log('参数', id)
    useEffect(() => {
        getArticleDetail(id);
    },[id])
    const getArticleDetail = (id) => {
        getOneArticle(id).then(res => {
            console.log(res, '文章详情')
            if (res.code === 200) {
                let result = res.data
                result.createdTime =  dayjs(result.createdAt).format('YYYY-MM-DD HH:mm:ss')
                addArticleData(res.data)
            } else {
                addArticleData({})
            }
        }).catch(e => {
            addArticleData({})
            console.log('错误', e)
        })
    }

    return (
        <>
            <div className={style['article-title']}>
                <span className={style['title']}>{articleData.title}</span>
                <div className={style['article-info']}>
                    <span>发布时间:{articleData.createdTime}</span>
                </div>
            </div>
            <div className={style['article-content']} dangerouslySetInnerHTML={{__html:articleData.content}}/>
        </>
    );
}

export default OneArticleDetail;
