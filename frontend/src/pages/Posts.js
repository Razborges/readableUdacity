import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsRequest, deletePostRequest, votePostRequest } from '../actions/PostsActions';
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

  _votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

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
    allPosts: state.posts.allposts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(postsRequest()),
    deletePost: (postId) => dispatch(deletePostRequest(postId)),
    votePost: (postId, vote) => dispatch(votePostRequest(postId, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
