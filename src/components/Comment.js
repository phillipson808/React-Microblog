import React, { Component } from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.removeComment(this.props.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.comment}</p>
        <button onClick={this.handleSubmit}>Remove</button>
      </div>
    )
  }
}
