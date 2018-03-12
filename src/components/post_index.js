import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router-dom';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPost(){
        return _.map(this.props.posts, post=>{
            return(
                <li className="list-group-item" key={post.id}>
                <Link to={`/post/${post.id}`}>   
                    {post.title}
                </Link>
                </li>
            );
        })
    }
    
    render(){
        
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/post/new" className="btn btn-primary">
                    Add a Post</Link>
                </div>
                <h4>Posts</h4>
                <ul className="list-group">
                    {this.renderPost()}
                </ul>
            </div>
        );  
    }
}

function mapStateToProps(state){
    return {posts:state.posts}
}
export default connect(mapStateToProps, {fetchPosts} )(PostIndex);