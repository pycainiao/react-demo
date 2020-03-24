import React, {Component} from 'react';

class Sign extends Component {
    ceshi = () => {
        console.log('父组件，触发了我')
    }
    componentDidMount() {
        // this.props.ceshi(this)
    }

    render() {
        return (
            <div>
                注册
            </div>
        );
    }
}

export default Sign;
