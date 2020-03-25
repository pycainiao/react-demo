import React, {Component} from 'react';
import getTabHOC from '../../component/getTableHOC';
import {connect} from 'react-redux'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state= {
            abc: 'home',
            dataCommon:'aaa'
        }
    }
    componentDidMount() {
        console.log(this.props, 'props')
        this.props.addRouter(this.props.location) // 添加路由
        console.log('混入的东西',this.state)
        this.setState({
            ...this.props.hocData,...this.state,
        })
    }
    testHOC = () => {
        this.props.getResult('来在Home')
    };
    render() {
        return (
            <div>
                这是Home
                <button onClick={this.testHOC}>触发下Hox</button>
            </div>
        );
    }
}

const mapStateToProps = ( state) => {
    return {
        token: state.token
    }
};
export default connect(mapStateToProps)(getTabHOC(Home));
