import React from 'react';
function getTabHOC(WrappedComponent) {
        return class extends React.Component{
            constructor(props) {
                super(props);
                this.state = {
                    dataCommon: [1,2,3],
                    formHox:true
                }
            }
            getResult = (value) => {
                console.log('获取getResult',value)
            };
            render() {
                return (
                    <WrappedComponent getResult={this.getResult} hocData={this.state} {...this.props}/>
                )
            }
        }
}
export default getTabHOC
