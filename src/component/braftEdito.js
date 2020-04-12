import React from 'react'
import {ArticleHandle} from "../api/common";
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'



export default class EditorDemo extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
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
    }
    // 提交文章操作
    addHandle = () => {
        let postData = {
            title: '测试标题1',
            content: this.state.editorState.toHTML()
        }
        ArticleHandle(postData).then(res => {
            console.log('提交的结果', res);
        }).catch(e => {
            console.log('报错了', e);
        })
    }
    render () {

        const { editorState } = this.state
        return (
            <div className="my-component">
                <BraftEditor
                    id={'editor-with-code-highlighter'}
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
                <button onClick={this.addHandle}>提交</button>
            </div>
        )

    }

}
