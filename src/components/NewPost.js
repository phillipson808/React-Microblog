import React, { Component } from 'react';
import uuid from 'uuidv4';
export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });

  }

  handleSubmit(evt) {
    evt.preventDefault();
    let id = uuid();
    if(this.props.currentPost){
      id = this.props.currentPost[0].id
    }

    this.props.addPost({
      id: id,
      title: this.state.title,
      description: this.state.description,
      body: this.state.body
    });
    return this.props.history.push('/');
  }

  componentDidMount() {
    if (this.props.currentPost) {
      let currentPost = this.props.currentPost[0];
      console.log(currentPost);
      this.setState({
        title: currentPost.title,
        description: currentPost.description,
        body: currentPost.body
      })
    }
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title"></label>
          <input id="title" name="title" className="title"
            onChange={this.handleChange}
            placeholder='Title'
            value={this.state.title}
            required />
          <br></br>
          <label htmlFor="description"></label>
          <input id="description" name="description" className="description"
            onChange={this.handleChange}
            placeholder='Description'
            value={this.state.description}
            required />
          <br></br>
          <label htmlFor="body"></label>
          <input id="body" name="body" className="body"
            onChange={this.handleChange}
            placeholder='Body'
            value={this.state.body}
            required />
          <br></br>
          <button onClick={this.handleSubmit} className="button">Submit</button>
          <button onClick={this.handleSubmit} className="button">Cancel</button>
        </form>
      </div>
    )
  }
}

