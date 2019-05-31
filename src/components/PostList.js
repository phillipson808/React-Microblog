import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class PostList extends Component {
  componentDidMount() {
    this.props.getAllPostsFromAPI();
  }

  render() {
    let postList = this.props.posts.map(post => (
      <div>
        <Link key={post.id} id={post.id} to={`/${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </Link>
        <button onClick={() => this.props.votePost(post.id, 'up')}>Up</button>
        <button onClick={() => this.props.votePost(post.id, 'down')}>Down</button>
        <h5>{post.votes}</h5>
      </div>
    ));


    return (
      <div>
        {postList}
      </div>
    );
  }
}
