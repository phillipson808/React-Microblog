import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div>
            <Link to={`/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.body}</p>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}
