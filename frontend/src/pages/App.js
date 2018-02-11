import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Posts from './Posts';
import PostsCategory from './PostsCategory';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Posts } />
          <Route exact path='/:category' component={ PostsCategory } />
          <Route exact path='/:category/:postId' component={ PostDetail } />
          <Route exact path='/add-post' component={ AddPost } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
