import React, {Component} from 'react';
import LoginStyle from './login.module.scss'
import {
    Form,
    Input,
    Button
} from 'antd';
import CodeLogin from "./codeLogin";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginType:1 // 当前操作的类型 1 登录 2 验证码登录 3 找回密码
        };
    }
    componentDidMount() {
        console.log('这是login组件')
    }

    login = () => {
        window.sessionStorage.setItem('token', 'tokenValue');
        // window.location.reload();
        this.props.history.push('/');

    };
    onFinish = values => {
        console.log(values,'开始登录');
        this.login();
    };
    checkLogin = () => {
        this.setState({
            loginType:2
        })
    };
    loginTypeChangeOK = (loginType) => {
        console.log('loginType', loginType);
        this.setState({
            loginType:loginType
        })
    };

    render() {
        const validateMessages = {
            required: '请输入手机号',
        };
        return (
            <div className={LoginStyle['login-main']} >
                <div className={LoginStyle['login-main-form']}>
                    <header className={LoginStyle['form-title']}>XXXXXXX</header>
                    <main className={LoginStyle['form-main']}>
                        { this.state.loginType === 1 &&
                            <Form   labelCol={{ span: 5 }}
                                    onFinish={this.onFinish}
                                    validateMessages={validateMessages}
                            >
                                <Form.Item label="手机号"   name={['user', 'name']} rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="密码"   name={['user', 'email']}>
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                                <span className={LoginStyle['code-span']} onClick={this.checkLogin}>验证码登录</span>
                            </Form>
                        }
                        {
                            this.state.loginType === 2 &&
                            <CodeLogin loginTypeChange={this.loginTypeChangeOK} login={this.login}/>
                        }

                    </main>
                </div>
            </div>
        );
    }
}

export default Login;
