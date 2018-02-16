import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsRequest, deletePostRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Post from '../components/Post';

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  _editPost = () => { return }

  _deletePost = (id) => {
    this.props.deletePost(id);
  }

  _upVotePost = () => { return }

  _downVotePost = () => { return }

  render() {
    const { allPosts } = this.props;
    return (
      <div>
        {allPosts &&
          allPosts.map(post => (
            <Post key={uuid()}
              post={post}
              editAction={this._editPost}
              deleteAction={() => this._deletePost(post.id)}
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
    allPosts: state.posts.allposts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(postsRequest()),
    deletePost: (postId) => dispatch(deletePostRequest(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
