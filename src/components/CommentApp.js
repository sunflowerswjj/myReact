import React,{Component} from 'react';
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
export default class CommentApp extends Component{
    constructor(){
        super();
        this.state={comments:[]}
    }
    componentDidMount(){
        clearInterval(this.timer1);
        this.setState({comments:localStorage.getItem("comments")?JSON.parse(localStorage.getItem("comments")):[]});
        this.timer1=setInterval(()=>this.setState({comments:this.state.comments}),500)
    }
    addComment=(comment)=>{
        comment.id=Date.now();
        comment.CreateAt=new Date();
       this.setState({comments:[...this.state.comments,comment]},()=>{
           localStorage.setItem("comments",JSON.stringify(this.state.comments))
       });
    }
    removeComment=(deleteId)=>{
        this.setState({comments:this.state.comments.filter(item=>item.id!==deleteId)});

    }
    render(){
        return (
           <div className="container">
               <div className="row">
                   <div className="panel panel-primary col-md-6 col-md-offset-3">
                       <div className="panel-heading">
                           <h3 className="panel-title">WelCome!</h3>
                       </div>
                       <div className="panel-body">
                           <CommentList comments={this.state.comments} removeComment={this.removeComment}/>
                       </div>
                       <div className="panel-footer">
                           <CommentInput addComment={this.addComment} />
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

