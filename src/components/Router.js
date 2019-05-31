import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPostContainer from '../containers/PostFormContainer';
import PostContainer from '../containers/PostContainer';
import Home from './Home';

export default class Router extends Component {
  

  render() {
    return (
      <Switch>
        <Route exact path="/"
          render={routerProps => <Home {...routerProps} />} />

        <Route exact path="/new"
          render={routerProps => <NewPostContainer {...routerProps} />} />

        <Route exact path="/:id"
          render={routerProps => <PostContainer {...routerProps} />} />
      </Switch>
    );
  }
}
