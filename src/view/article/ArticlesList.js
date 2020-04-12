import React, {Component} from 'react';
import service from "../../utils/request";
import 'braft-editor/dist/output.css'

/*文章列表*/
class ArticlesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        this.getArticleList();
    }
    getArticleList = () => {
        service.get('/users').then(res => {
            console.log(res, '123')
            let data1 = res.data || [];
            console.log(data1, '数据')
            this.setState({
                articles: data1[0].gereneshi || []
            })
        }).catch(e => {
            console.log(e)
        })
    }
    render() {
        return (
            <div>
                文章列表
                {
                    this.state.articles.map( item => {
                        return <div key={item._id}>
                            <h3>{item.title}</h3>
                            <div className="braft-output-content" dangerouslySetInnerHTML={{__html: item.content}}/>
                        </div>
                    })
                }
                {/*<button onClick={this.getArticleList}>查找</button>*/}
            </div>
        );
    }
}

export default ArticlesList;
