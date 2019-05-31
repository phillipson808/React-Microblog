import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.removeComment(this.props.postId, this.props.id);
  }

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.handleSubmit}>Remove</button>
      </div>
    );
  }
}
