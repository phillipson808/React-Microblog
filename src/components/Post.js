import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentForm from './CommentForm';
import Comment from './Comment';
import uuid from 'uuidv4';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  componentDidMount() {
    this.props.getSinglePostFromAPI(this.props.match.params.id);
  }

  componentWillUnmount(){
    this.props.clearPost();
  }

  deletePost() {
    this.props.deletePostFromAPI(this.props.match.params.id);
    this.props.history.push('/');
  }

  editPost() {
    this.setState({
      editing: true
    });
  }

  addComment(commentObj) {
    this.props.addCommentToAPI(commentObj);
  }

  removeComment(postId, commentId) {
    this.props.deleteCommentFromAPI(postId, commentId);
  }


  render() {
    console.log(this.props);

    let currentPost;
    let postPage = <h1>Loading...</h1>;
    if (this.props.currentPost) {
      currentPost = this.props.currentPost;
      postPage =
        <div>
          <h1>{currentPost.title}</h1>
          <p>{currentPost.description}</p>
          <p>{currentPost.body}</p>
          <button onClick={this.editPost} className='btn btn-primary'>Edit</button>
          <button onClick={this.deletePost} className='btn btn-danger'>Delete</button>
          <br></br>
          {currentPost.comments.map(comment => {
            let id = uuid();
            return <Comment removeComment={this.removeComment} postId={this.props.match.params.id} id={comment.id} key={id} {...comment} />;
          }
          )}
          <CommentForm addComment={this.addComment} id={this.props.match.params.id} />
          <button onClick={() => this.props.votePost(currentPost.id, 'up')}>Up</button>
          <button onClick={() => this.props.votePost(currentPost.id, 'down')}>Down</button>
          <h5>{currentPost.votes}</h5>
        </div>;
    }

    let editPage = <PostForm currentPost={currentPost} savePost={this.props.savePost} {...this.props} />;

    return (
      this.state.editing ? editPage : postPage
    );
  }
}
