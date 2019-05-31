import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class PostList extends Component {
  componentDidMount() {
    this.props.getAllPostsFromAPI();
  }
  render() {
    let postList = this.props.posts.map(post => (
      <Link key={post.id} id={post.id} to={`/${post.id}`}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </Link>));

    return (
      <div>
        {postList}
      </div>
    );
  }
}
