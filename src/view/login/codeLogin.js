import React from 'react';
// 验证码登录
import {
    Form,
    Input,
    Button
} from 'antd';
const CodeLogin = (props) => {
    const validateMessages = {
        required: '请输入手机号',
    };
    const onFinish = values => {
        console.log(values);
        props.login();
    };
    const checkToLogin = () => {
        props.loginTypeChange(1)
    };
    return (
        <>
            <Form   labelCol={{ span: 5 }}
                    onFinish={onFinish}
                    validateMessages={validateMessages}
            >
                <Form.Item label="手机号"   name={['user', 'name']} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="验证码"   name={['user', 'email']} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        SubmitCodde
                    </Button>
                </Form.Item>
                <button onClick={checkToLogin}>切回登录</button>
            </Form>
        </>
    );
};

export default CodeLogin;
