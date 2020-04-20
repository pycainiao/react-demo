import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import style from '../style/brafteEdito.module.scss'


export default class EditorDemo extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
        isActive:false,// 是否获得焦点
        editorState: BraftEditor.createEditorState(null)
    }

    async componentDidMount () {
        // // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        // this.setState({
        //     editorState: BraftEditor.createEditorState(htmlContent)
        // })
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log('htmlContent', htmlContent)
        // const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        console.log(editorState.toHTML(), 'ed')
        this.setState({ editorState })
        this.props.getBraftEditoValue(editorState.toHTML()) //传递文本编辑器的值
    }
    onFocus = () => {
        console.log('123123')
        this.setState({
            isActive: true
        })
    }
    onBlur = () => {
        this.setState({
            isActive: false
        })
    }

    render () {

        const { editorState, isActive} = this.state
        return (
            <div className={[style["braft-editor-main"],isActive ? style['active']:""].join(' ')}>
                <BraftEditor
                    id={'editor-with-code-highlighter'}
                    value={editorState}
                    placeholder={this.props.placeholder}
                    onChange={this.handleEditorChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
            </div>
        )

    }

}
