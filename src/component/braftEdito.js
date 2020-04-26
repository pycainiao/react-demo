import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import style from '../style/brafteEdito.module.scss'
import {uploadHandle} from "../api/common";

export default class EditorDemo extends React.Component {
    state = {
        // 创建一个空的editorState作为初始值
        isActive:false,// 是否获得焦点
        editorState: BraftEditor.createEditorState(this.props.defaultContent || null)
    }

    async componentDidMount () {
        // // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        // this.setState({
        //     editorState: BraftEditor.createEditorState(this.props.defaultContent)
        // })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.defaultContent !== this.props.defaultContent) {
            console.log('马上更新??', this.props.defaultContent)
            this.setState({
                editorState: BraftEditor.createEditorState(this.props.defaultContent)
            })
        }
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
    uploadFn = (param) => {
        console.log(param, '上传的')
        let params = new FormData();
        params.append('file',param.file)
        let config = {
            headers: {'Content-Type':'multipart/form-data'}
        }
        uploadHandle(params,config).then(res => {
            console.log(res, '上传结果')
            if (res.code === 200) {
                param.success({
                    url:res.url
                })
            } else {
                param.error({
                    msg: res.msg || '上传失败'
                })
            }
        }).catch(e => {
            console.log(e, '上传错误了')
            param.error({
                msg: '上传发生错误'
            })
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
                    media={{
                        uploadFn:this.uploadFn,
                        accepts: {
                            image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                            video: false,
                            audio: false
                        }
                    }}
                    onChange={this.handleEditorChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
            </div>
        )

    }

}
