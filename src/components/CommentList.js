import React,{Component} from 'react';
import Comment from "./Comment";
export default class CommentList extends Component{
    render(){
        return (
                <ul className="list-group">
                    {
                        this.props.comments.map((item,index)=>(
                           <Comment item={item} key={index} removeComment={this.props.removeComment}/>
                        ))
                    }
                </ul>
        )
    }
}

