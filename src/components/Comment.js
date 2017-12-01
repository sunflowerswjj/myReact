import React,{Component} from 'react';
import moment from "moment";
import "moment/locale/zh-cn";
export default class Comment extends Component{
    render(){
        return (
               <li className="list-group-item">
                   {this.props.item.author}:{this.props.item.content}
                   <button className="btn btn-xs btn-danger pull-right" onClick={()=>this.props.removeComment(this.props.item.id)}>删除</button>
                   <span className="pull-right">{moment(this.props.item.CreateAt).fromNow()}</span>
               </li>
        )
    }
}
