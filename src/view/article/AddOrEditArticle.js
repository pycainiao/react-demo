import React, {useEffect, useState} from 'react';
import EditorDemo from "../../component/braftEdito";
import { Form, Input, Button ,message} from 'antd'
import {ArticleHandle, editArticleByID} from '../../api/common';
import style from './addArticle.module.scss'
import {useHistory} from 'react-router-dom';

/**
 * 修改或者新增文章的组件
 * @param props
 * @returns {*}
 * @constructor
 */
function AddOrEditArticle(props) {
    console.log('这是新增文字',props)
    const history = useHistory();
    const [form] = Form.useForm();
    const isEdit = !!props.isEdit; // true是编辑操作.反之为新增
    const [braftContent, setBraftContent] = useState("")
    useEffect(() => {
        console.log('渲染了?')
        if (  props.articleData) {
            setBraftContent(props.articleData.content || '')
            form.setFieldsValue({
                ...props.articleData
            })
        }
    },[])
    const handleSubmit = (value) => {
        console.log(111, value)
        console.log('是否编辑',isEdit)
        if (isEdit) {
            editeArticle(value)
        } else {
            addArticle(value)
        }
    }
    const addArticle = (value) => {
        ArticleHandle(value).then(res => {
            console.log('提交的结果',res)
            if (res.code === 200) {
                message.success('提交成功')
                history.push('/')
                reset();
            } else{
                message.warning('提交失败')
            }
        }).catch(e => {
            console.log('提交失败', e)
            message.warning('提交失败')
        })
    }

    const editeArticle = (value) => {
        editArticleByID(props.articleData._id,value).then(res => {
            if (res.code === 200) {
                message.success('修改成功')
                reset();
                history.push('/')
            } else{
                message.warning('修改失败')
            }
        }).catch(e => {
            message.warning('修改失败')
        })

    }

    const getBraftEditoValue = (value) => {
        console.log(value, '文本编辑器的值')
        form.setFieldsValue({'content': value})
    }
    const reset = () => {
        console.log('重置')
        form.resetFields();
        setBraftContent("");
    }
    return (
        <div className={style['add-article-main']}>
            <Form form={form}
                  onFinish={handleSubmit}>
                <Form.Item
                    name="title"
                    label="标题"
                    rules={[
                        {
                            required: true,
                            message: '标题'
                        },
                    ]}
                >
                    <Input placeholder="请输入标题" />
                </Form.Item>
                <Form.Item
                    name="content"
                    label="内容"
                    rules={[
                        {
                            required: true,
                            message: '请输入内容'
                        },
                    ]}
                >
                    <EditorDemo className='article-editor' getBraftEditoValue={getBraftEditoValue} defaultContent={braftContent}   placeholder="请输入正文内容"/>
                </Form.Item>
                <Form.Item className={style['add-article-btn']}>
                    <Button htmlType="button" onClick={reset}>重置</Button>
                    <Button type="primary" htmlType="submit">{isEdit ?'保存修改':'提交'}</Button>
                </Form.Item>
            </Form>

        </div>
    );
}

export default AddOrEditArticle;
