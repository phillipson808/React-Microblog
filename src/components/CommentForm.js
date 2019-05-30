import React, { Component } from 'react'
import uuid from 'uuidv4';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       comment: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });


  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment({...this.state, id: uuid()})


  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="comment" name="comment" className="comment"
            onChange={this.handleChange}
            placeholder='Comment'
            value={this.state.comment}
            required />
          <br></br>
          <button className='btn btn-primary'>Add</button>
        </form>
      </div>
    )
  }
}
