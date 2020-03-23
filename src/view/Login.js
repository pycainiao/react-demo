import React, {Component} from 'react';
import LoginStyle from './login.module.scss'
class Login extends Component {
    render() {
        return (
            <div className={LoginStyle.login}>
                这的登录页
                <span className={LoginStyle.ttspan}>改变下紫藤苑颜色</span>
            </div>
        );
    }
}

export default Login;
