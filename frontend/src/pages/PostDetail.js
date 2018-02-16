import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentsPostIdRequest } from '../actions/CommentsActions';
import { postRequest, deletePostRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Post from '../components/Post';
import Comment from '../components/Comment';

class PostDetail extends Component {
  state = {
    postId: this.props.match.params.postId
  }

  componentWillMount() {
    this.props.getCommentsById(this.state.postId)
    this.props.getPostById(this.state.postId)
  }

  _editPost = () => { return }

  _deletePost = (id) => {
    this.props.deletePost(id);
    this.props.history.push('/');
  }

  _upVotePost = () => { return }

  _downVotePost = () => { return }

  render() {
    const { comments, post } = this.props;
    return(
      <div>
        { post &&
          <Post 
            post={post}
            editAction={this._editPost}
            deleteAction={() => this._deletePost(post.id)}
            upVote={this._upVotePost}
            downVote={this._downVotePost}
          />
        }
        {comments && 
          comments.map(comment => (
          <Comment key={uuid()}
            comment={comment}
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
    comments: state.comments.commentsPost,
    post: state.posts.postDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentsById: (postId) => dispatch(commentsPostIdRequest(postId)),
    getPostById: (postId) => dispatch(postRequest(postId)),
    deletePost: (postId) => dispatch(deletePostRequest(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
