import React, {Component} from 'react';
import LoginStyle from './login.module.scss'
import { Form, Input, Button, message } from 'antd';
import { login } from "../../api/common";
import {connect} from 'react-redux'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Login extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('这是login组件',this.props)
    }
    // 开始登录 nga
    onFinish = values => {
        console.log(values,'开始登录');
        login(values).then(res => {
            console.log('登录的结果', res);
            if (res.code === 200) {
                window.sessionStorage.setItem('token', res.token);
                window.sessionStorage.setItem('userInfo', JSON.stringify(res.userInfo));
                this.props.addUserInfo({...res.userInfo});
                this.props.history.push('/')
            } else {
                message.warning('账号密码错误!')
            }
        }).catch(e => {
            console.log('登录失败', e)
            message.error('登录失败!');
        })

    };
    Reset = () => {
        this.formRef.current.resetFields();
    }
    getTodoInfo = () => {
        console.log(this.props.newtODO)
    }
    render() {
        return (
            <div className={LoginStyle['login-main']}>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Form.Item
                        name="userName"
                        label="用户名"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="passWord"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            },
                        ]}
                    >
                        <Input.Password  />
                    </Form.Item>
                    <Form.Item {...tailLayout} className={'btn-main'}>
                        <Button htmlType="button" onClick={this.Reset} >重置</Button>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
            addUserInfo: (userInfo) => {
                dispatch({
                    type:'addUserInfo',
                    userInfo:userInfo
                })
            },
            getTodoInfo: () => {
                dispatch({
                    type:""
                })
            }
        }
}
const mapStateToProps = (state) => {
    console.log(state.toDo, 'state的值')
    return {
        newtODO: state.toDo
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
