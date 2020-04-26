import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {getOneArticle, deleteArticleByID} from '../../api/common';
import { Button, message } from 'antd';
import dayjs from 'dayjs';
import style from './OneArticleDetail.module.scss'
import AddOrEditArticle from './AddOrEditArticle';
import 'braft-editor/dist/output.css'
/**
 * 文章详情
 * @param props
 * @returns {*}
 * @constructor
 */
function OneArticleDetail(props) {
    const history = useHistory();
    let { id } = useParams();
    const [articleData,addArticleData]  = useState({})
    useEffect(() => {
        getArticleDetail(id);
    },[id])
    const [isEdit, checkIsEdit] = useState(false); // 是否是编辑操作.默认不是
    const isLogin = window.sessionStorage.getItem('token');
    const getArticleDetail = (id) => {
        getOneArticle(id).then(res => {
            console.log(res, '文章详情')
            if (res.code === 200) {
                let result = res.data
                result.createdTime =  dayjs(result.createdAt).format('YYYY-MM-DD HH:mm:ss')
                result.updatedTime =  dayjs(result.updatedAt).format('YYYY-MM-DD HH:mm:ss')
                addArticleData(res.data)
            } else {
                addArticleData({})
            }
        }).catch(e => {
            addArticleData({})
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
    const BtnHandle = () => {
        return (
            <>
                <Button onClick={deleteOneArticle} className={'delete-btn'} size={'small'} type="primary" danger>删除</Button>
                <Button onClick={ () => checkIsEdit(true)} className={'edit-btn'} size={'small'} type="primary" >编辑</Button>
            </>
        )
    }
    const ShowArticleDetail = () => {
        return (
            <>
                <div className={style['article-title']}>
                    {
                        isLogin && <BtnHandle/>
                    }
                    <span className={style['title']}>{articleData.title}</span>
                    <div className={style['article-info']}>
                        <span>发布时间:{articleData.createdTime}</span>
                        <span>修改时间:{articleData.updatedTime}</span>
                    </div>
                </div>
                <div  className={[style['article-content'],'braft-output-content'].join(' ')} dangerouslySetInnerHTML={{__html:articleData.content}}/>
            </>
        )
    }
    return (
        <>
        {
            isEdit ? <AddOrEditArticle articleData={articleData} isEdit={true}/> : <ShowArticleDetail />
        }
        </>
    );
}

export default OneArticleDetail;
