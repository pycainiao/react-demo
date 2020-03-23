import React, {Component} from 'react';
import LoginStyle from './login.module.scss'
import {Button} from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // componentDidMount() {
    //     console.log(this.props, 'props')
    // }

    login = () => {
        window.sessionStorage.setItem('token', 'tokenValue');
        this.props.history.push('/');
        window.location.reload();
    };
    render() {
        return (
            <div className={LoginStyle.login} >
                这的登录页
                <Button onClick={this.login}  type="primary">登录</Button>
            </div>
        );
    }
}

export default Login;
