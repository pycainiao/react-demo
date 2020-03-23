// 视图层
import React from 'react';
import {Switch} from 'antd';
const Layout = () => {
    return (
        <div>
            这是视图层
            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />


        </div>
    );
};

export default Layout;
