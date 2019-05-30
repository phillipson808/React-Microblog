import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NewPost from './NewPost';
import Post from './Post';
import Home from './Home';

export default class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [{
        id: '1',
        title: 'Hello',
        description: 'test',
        body: 'body'
      }]
    }
    this.addPost = this.addPost.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  addPost(newPost){
    let filteredPosts = this.state.posts.filter(post => post.id !== newPost.id)
    this.setState({
      posts: [...filteredPosts, newPost]
    })
  }

  removePost(postId){
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId)
    })
  }

  render() {
    return (
        <Switch>
          <Route exact path="/"
            render={routerProps => <Home {...routerProps} posts={this.state.posts} />} />

          <Route exact path="/new"
            render={routerProps => <NewPost {...routerProps} addPost={this.addPost} />} />

          <Route exact path="/:id"
            render={routerProps => <Post {...routerProps} posts={this.state.posts} removePost={this.removePost} addPost={this.addPost} />} />
        </Switch>
    )
  }
}
