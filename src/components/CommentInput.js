import React,{Component} from 'react';
export default class CommentInput extends Component{
    constructor(){
        super();
        this.state={author:"",content:""}
    }
    handleChange=(event,key)=>{

        this.setState({[key]:event.target.value});


    };
    componentDidMount(){
        this.setState({author:localStorage.getItem("author")||""})
    }
    Submit=(event)=>{
        event.preventDefault();
        this.props.addComment(this.state)
        this.setState({content:""});
        localStorage.setItem("author",JSON.stringify(this.state.author));
    }
    render(){
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.Submit}>
                    <div className="form-group">
                        <label  htmlFor="author" className="col-sm-2">作者</label>
                        <div className="col-sm-10">
                            <input  className="form-control" value={this.state.author} onChange={(event)=>this.handleChange(event,"author")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="content" className="col-sm-2">评论内容</label>
                        <div className="col-sm-10">
                            <textarea  className="form-control" rows="3" value={this.state.content}onChange={(event)=>this.handleChange(event,"content")}></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit"className="btn btn-primary">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
