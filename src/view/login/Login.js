import React, {Component} from 'react';
import LoginStyle from './login.module.scss'
import {
    Form,
    Input,
    Button
} from 'antd';
import CodeLogin from "./codeLogin";
import { LoginHandle } from '../../api/common';
import {connect} from 'react-redux';
import { getUserInfo } from "../../api/common";

class Login extends Component {

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
        // window.sessionStorage.setItem('token', 'FTokenID');
        // this.props.addTokenHandle('FTokenID');
        // this.props.history.push('/');
        // this.props.history.push('/');
        // let postData = {
        //     FAction: "LoginDefault",
        //     FPhone: '18823780435',
        //     FType: 2,
        //     FPassword: 'e10adc3949ba59abbe56e057f20f883e'
        // };
        // LoginHandle(postData).then(res => {
        //     console.log('登录结果', res)
        //     if (res.Result === 200) {
        //         let FTokenID = res.FObject[0].FTokenID
        //         window.sessionStorage.setItem('token', FTokenID);
        //         this.props.addTokenHandle(FTokenID);
        //         this.props.history.push('/');
        //     }
        // }).catch(e => {
        //     console.log(e, '错误')
        // })
        // this.login();
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
        // const validateMessages = {
        //     required: '请输入手机号',
        // };
        return (
            // <div className={LoginStyle['login-main']} >
            //     <div className={LoginStyle['login-main-form']}>
            //         <header className={LoginStyle['form-title']}>XXXXXXX</header>
            //         <main className={LoginStyle['form-main']}>
            //             { this.state.loginType === 1 &&
            //                 <Form   labelCol={{ span: 5 }}
            //                         onFinish={this.onFinish}
            //                         validateMessages={validateMessages}
            //                 >
            //                     <Form.Item label="手机号"   name={['user', 'name']} rules={[{ required: true }]}>
            //                         <Input />
            //                     </Form.Item>
            //                     <Form.Item label="密码"   name={['user', 'email']}>
            //                         <Input />
            //                     </Form.Item>
            //                     <Form.Item>
            //                         <Button type="primary" htmlType="submit">
            //                             Submit
            //                         </Button>
            //                     </Form.Item>
            //                     <span className={LoginStyle['code-span']} onClick={this.checkLogin}>验证码登录</span>
            //                 </Form>
            //             }
            //             {
            //                 this.state.loginType === 2 &&
            //                 <CodeLogin loginTypeChange={this.loginTypeChangeOK} login={this.login}/>
            //             }
            //
            //         </main>
            //     </div>
            // </div>
            <div >这是登录页
                <button onClick={this.login}>测试登录</button>
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
