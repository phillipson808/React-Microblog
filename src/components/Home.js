import React, { Component } from 'react';
import PostList from './PostList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PostList posts = {this.props.posts} />
      </div>
    )
  }
}
