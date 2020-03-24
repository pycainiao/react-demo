import React, {Component} from 'react';

class DistCar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props)
        this.props.addRouter(this.props.location) // 添加路由
    }

    render() {
        return (
            <div>
                这是派发清单
            </div>
        );
    }
}

export default DistCar;
