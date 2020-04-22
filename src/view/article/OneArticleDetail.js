import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getOneArticle} from '../../api/common';

/**
 * 文章详情
 * @param props
 * @returns {*}
 * @constructor
 */
function OneArticleDetail(props) {
    const [content,addContent]  = useState("")
    let { id } = useParams();
    console.log('参数', id)
    useEffect(() => {
        getArticleDetail(id);
    },[id])
    const getArticleDetail = (id) => {
        getOneArticle(id).then(res => {
            console.log(res, '文章详情')
            if (res.code === 200) {
                addContent(res.data.content)
            } else {
                addContent('')
            }
        }).catch(e => {
            addContent('')
            console.log('错误', e)
        })
    }

    return (
        <div dangerouslySetInnerHTML={{__html:content}}/>
    );
}

export default OneArticleDetail;
