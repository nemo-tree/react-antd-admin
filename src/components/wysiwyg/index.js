import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'

const rawContentState = {'entityMap':{'0':{'type':'IMAGE','mutability':'MUTABLE','data':{'src':'http://i.imgur.com/aMtBIep.png','height':'auto','width':'100%'}}},'blocks':[{'key':'9unl6','text':'','type':'unstyled','depth':0,'inlineStyleRanges':[],'entityRanges':[],'data':{}},{'key':'95kn','text':' ','type':'atomic','depth':0,'inlineStyleRanges':[],'entityRanges':[{'offset':0,'length':1,'key':0}],'data':{}},{'key':'7rjes','text':'','type':'unstyled','depth':0,'inlineStyleRanges':[],'entityRanges':[],'data':{}}]}

class Wysiwyg extends Component {
    state = {
        editorContent: undefined,
        contentState: rawContentState,
        editorState: '',
    }

    onEditorChange = editorContent => {
        this.setState({
            editorContent,
        })
    }

    clearContent = () => {
        this.setState({
            contentState: '',
        })
    }

    onContentStateChange = contentState => {
        console.log('contentState', contentState)
    }

    onEditorStateChange = editorState => {
        this.setState({
            editorState,
        })
    }

    imageUploadCallBack = file => new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('POST', 'https://api.imgur.com/3/image')
            xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca')
            const data = new FormData()
            data.append('image', file)
            xhr.send(data)
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText)
                resolve(response)
            })
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText)
                reject(error)
            })
        }
    )

    render() {
        const { editorContent, editorState } = this.state
        return (

            <Card
                bordered={false}
                title="富文本编辑器"
            >
                <Editor
                    editorClassName="home-editor"
                    editorState={editorState}
                    localization={{ locale: 'zh', translations: {'generic.add': 'Test-Add'} }}
                    mention={{
                        separator: ' ',
                        trigger: '@',
                        caseSensitive: true,
                        suggestions: [
                            { text: 'A', value: 'AB', url: 'href-a' },
                            { text: 'AB', value: 'ABC', url: 'href-ab' },
                            { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                            { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                            { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                            { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                            { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' },
                        ],
                    }}
                    onBlur={() => {console.log('blur')}}
                    onContentStateChange={this.onEditorChange}
                    onEditorStateChange={this.onEditorStateChange}
                    onFocus={() => {console.log('focus')}}
                    onTab={() => {console.log('tab'); return true}}
                    placeholder="输入正文,可以同步转换格式"
                    spellCheck
                    toolbar={{
                        history: { inDropdown: true },
                        inline: { inDropdown: false },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        image: { uploadCallback: this.imageUploadCallBack },
                    }}
                    toolbarClassName="home-toolbar"
                    wrapperClassName="home-wrapper"
                />

                <style>{`
                    .home-editor {
                        min-height: 300px
                    }
                `}</style>
            </Card>
        )
    }
}

export default Wysiwyg