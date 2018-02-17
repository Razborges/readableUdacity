import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPostRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import moment from 'moment';

import PostForm from '../components/PostForm';

class AddPost extends Component {
  state = {
    title: '',
    author: '',
    category: 'react',
    body: ''
  }

  handleInputChange = (e) => {
    const target = e.target
    const { value, name } = target
    this.setState({ [name]: value })
  }

  submitNewPost = (e) => {
    e.preventDefault()
    const post = {
      id: uuid(),
      timestamp: moment(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      voteScore: 0,
      deleted: false
    };
    this.props.newPost(post);
    this.props.history.push(`/${post.category}/${post.id}`);
  }

  _cancelForm = () => {
    this.props.history.push('/');
  }
  
  render() {
    const { categories } = this.props;
    return (
      <div>
        <PostForm
          post={this.state}
          categories={categories}
          submitFunction={this.submitNewPost}
          handleFunction={this.handleInputChange}
          handleModal={this._cancelForm}
          labelModal={'Novo Post'}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (post) => dispatch(newPostRequest(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);