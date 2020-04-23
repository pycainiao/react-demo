import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {getOneArticle, deleteArticleByID} from '../../api/common';
import { Button, message } from 'antd';
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
    const history = useHistory();
    let { id } = useParams();
    console.log('参数', id)
    useEffect(() => {
        getArticleDetail(id);
    },[id])
    const isLogin = window.sessionStorage.getItem('token');
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
    const deleteOneArticle = () => {
        deleteArticleByID(id).then(res => {
            console.log(res, '删除')
            if (res.code === 200) {
                message.success('删除成功')
                history.push('/');
            } else {
                message.warning('删除失败')
            }
        }).catch(e => {
            console.log(e, '删除错误')
            message.warning('删除失败')
        })
    }
    return (
        <>
            <div className={style['article-title']}>
                {
                    isLogin &&  <Button onClick={deleteOneArticle} className={'delete-btn'} size={'small'} type="primary" danger>删除</Button>
                }
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
