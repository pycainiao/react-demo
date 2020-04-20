import React from 'react';
import EditorDemo from "../../component/braftEdito";
import { Form, Input, Button ,message} from 'antd'
import {ArticleHandle} from '../../api/common';
import style from './addArticle.module.scss'
function AddArticle(props) {
    console.log('这是新增文字')
    const [form] = Form.useForm();
    const handleSubmit = (value) => {
        console.log(111, value)
        ArticleHandle(value).then(res => {
            console.log('提交的结果',res)
            if (res.code === 200) {
                message.success('提交成功')
                reset();
            } else{
                message.warning('提交失败')
            }
        }).catch(e => {
            console.log('提交失败', e)
            message.warning('提交失败')
        })
    }
    const getBraftEditoValue = (value) => {
        console.log(value, '文本编辑器的值')
        form.setFieldsValue({'content': value})
    }
    const reset = () => {
        console.log('重置')
        form.resetFields();
    }
    return (
        <div>
            <Form form={form} onFinish={handleSubmit}>
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
                    <EditorDemo className='article-editor' getBraftEditoValue={getBraftEditoValue}   placeholder="请输入正文内容"/>
                </Form.Item>
                <Form.Item className={style['add-article-main']}>
                    <Button htmlType="button" onClick={reset}>重置</Button>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>

        </div>
    );
}

export default AddArticle;
