import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFromCategoryRequest, deletePostRequest, votePostRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Post from '../components/Post';

class PostsCategory extends Component {
  state = {
    category: this.props.match.params.category
  }

  componentDidMount() {
    this.props.getPostsFromCategory(this.state.category)
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.category !== nextProps.match.params.category) {
      this.setState({ category: nextProps.match.params.category })
      this.props.getPostsFromCategory(nextProps.match.params.category)
    }
  }

  _editPost = () => { return }

  _deletePost = (id, category) => {
    this.props.deletePost(id, category);
  }

  _votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

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
              deleteAction={() => this._deletePost(post.id, this.state.category)}
              upVote={() => this._votePost(post.id, 'upVote')}
              downVote={() => this._votePost(post.id, 'downVote')}
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
    deletePost: (postId, category) => dispatch(deletePostRequest(postId, category)),
    votePost: (postId, vote) => dispatch(votePostRequest(postId, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory);