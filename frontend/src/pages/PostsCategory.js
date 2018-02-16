import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFromCategoryRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Post from '../components/Post';

class PostsCategory extends Component {
  state = {
    category: this.props.match.params.category
  }

  componentWillMount() {
    this.props.getPostsFromCategory(this.state.category)
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.category !== nextProps.match.params.category) {
      this.setState({ category: nextProps.match.params.category })
      this.props.getPostsFromCategory(nextProps.match.params.category)
    }
  }

  _editPost = () => { return }

  _deletePost = () => { return }

  _upVotePost = () => { return }

  _downVotePost = () => { return }

  render() {
    const { postsCategory } = this.props;
    const { category } = this.state;

    return (
      <div>
        <h1>{ category }</h1>
        {postsCategory &&
          postsCategory.map(post => (
            <Post key={uuid()}
              post={post}
              editAction={this._editPost}
              deleteAction={this._deletePost}
              upVote={this._upVotePost}
              downVote={this._downVotePost}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsCategory: state.posts.postsCategory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsFromCategory: (category) => dispatch(postsFromCategoryRequest(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory);