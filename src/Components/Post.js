import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Post extends Component{
    state={
        post: null
    }
    componentDidMount(){
        console.log(this.props);
        let currentId = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + currentId)
        .then(res => {
            this.setState({post: res.data})
            //console.log(res);
        })
    }

render(){
    const post = this.state.post;
    const currentPost = post ? (
        <div className= "post card" key={post.id}>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
    ) : (
        <div className= "center">Loading posts...</div>
    )

    return(
        <div className="container">
            <h4>{currentPost}</h4>
        </div>
    )
}
}

export default Post;
