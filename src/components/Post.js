import React, { Component } from 'react';
import NewPost from './NewPost';
import CommentForm from './CommentForm';
import Comment from './Comment';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      comments: []
    }
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  deletePost() {
    this.props.removePost(this.props.match.params.id);
    this.props.history.push('/');
  }

  editPost() {
    this.setState({
      editing: true
    })
  }

  addComment(comment){
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  removeComment(commentId){
    let filteredComments = this.state.comments.filter(comment => comment.id !== commentId);
    this.setState({
      comments: filteredComments
    })
  }

  render() {
    let currentPost = this.props.posts.filter(post => post.id === this.props.match.params.id);
    let postPage =
      <div>
        <h1>{currentPost[0].title}</h1>
        <p>{currentPost[0].description}</p>
        <p>{currentPost[0].body}</p>
        <button onClick={this.editPost} className='btn btn-primary'>Edit</button>
        <button onClick={this.deletePost} className='btn btn-danger'>Delete</button>
        {this.state.comments.map(comment => 
          <Comment removeComment={this.removeComment} {...comment} />
          
        )}
        <CommentForm addComment={this.addComment}/>
      </div>
  
    let page = this.state.editing ? <NewPost currentPost={currentPost} addPost={this.props.addPost} history={this.props.history} /> :  postPage
    return (
      page
    )
  }
}
