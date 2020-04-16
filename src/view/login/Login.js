import React, {Component} from 'react';
import LoginStyle from './login.module.scss'
import { Form, Input, Button } from 'antd';
import { getUserInfo } from "../../api/common";

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
        console.log('login这里呢constructor')
        this.state = {
            loginType:1, // 当前操作的类型 1 登录 2 验证码登录 3 找回密码,
            ceshiID: 0
        };
    }
    componentDidMount() {
        console.log('这是login组件')
    }

    onFinish = values => {
        console.log(values,'开始登录');

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
    login = () => {
        getUserInfo().then(res => {
            console.log(res, '获取的结果')
        }).catch(e => {
            console.log(e ,'错误')
        })
    }
    render() {
        console.log('多次吗')

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
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" >
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
// const mapDispatchToProps = (dispatch) => {
//         return {
//             addTokenHandle: (token) => {
//                 dispatch({
//                     type:'addToken',
//                     token:token
//                 })
//             }
//         }
// }
// export default connect('',mapDispatchToProps)(Login);
export default Login
