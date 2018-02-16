import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoriesRequest } from '../actions/CategoriesActions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Posts from './Posts';
import PostsCategory from './PostsCategory';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
// import NotFound from './NotFound';

class App extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar categories={this.props.categories} />
          
          <Switch>
            <Route exact path='/' component={ Posts } />
            <Route exact path='/addpost' component={ AddPost } />
            <Route exact path='/:category' component={ PostsCategory } />
            <Route exact path='/:category/:postId' component={ PostDetail } />
            {/* <Route component={ NotFound } /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(categoriesRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
