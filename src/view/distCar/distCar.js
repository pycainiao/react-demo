import React, {Component} from 'react';
import {AdminHandle} from '../../api/common';
import {Table} from 'antd';
class DistCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'FWareHouseName',
                    key: 'FWareHouseName',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ]

        }
    }
    componentDidMount() {
        console.log(this.props)
        this.props.addRouter(this.props.location) // 添加路由
        let postData = {
            FAction: "QueryWarehouseList",
            FPageSize: 20,
            FPageIndex: 1,
            FKeyWord: "",
        }
        AdminHandle(postData).then(res => {
            console.log(res,'resizeBy')
            this.setState({
                dataList: res.FObject.Table1 || []
            })
        }).catch(e => {
            console.log(e, '错误了')
        })

    }

    render() {
        return (
            <div>
                这是派发清单
                <Table dataSource={this.state.dataList} columns={this.state.columns} />;
            </div>
        );
    }
}

export default DistCar;
