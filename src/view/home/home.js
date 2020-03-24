import React, {Component} from 'react';

class Home extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.addRouter(this.props.location) // 添加路由
    }
    render() {
        return (
            <div>
                这是Home
            </div>
        );
    }
}

export default Home;
