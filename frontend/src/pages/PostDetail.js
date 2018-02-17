import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentsPostIdRequest } from '../actions/CommentsActions';
import { postRequest, deletePostRequest, votePostRequest, editPostRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import moment from 'moment';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import If from '../components/If';
import Comment from '../components/Comment';

class PostDetail extends Component {
  state = {
    title: '',
    author: '',
    category: 'react',
    body: '',
    modalEdit: false,
    modalPostId: this.props.match.params.postId
  }

  componentDidMount() {
    this.props.getCommentsById(this.state.modalPostId)
    this.props.getPostById(this.state.modalPostId)
  }

  handleInputChange = (e) => {
    const target = e.target
    const { value, name } = target
    this.setState({ [name]: value })
  }

  submitEditPost = (e) => {
    e.preventDefault()
    const post = {
      id: this.state.modalPostId,
      timestamp: moment(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
    }
    this._cancelForm();
    this.props.editPost(post, post.id);
  }

  _cancelForm = () => {
    this.setState({ 
      title: '',
      author: '',
      category: '',
      body: '',
      modalEdit: !this.state.modalEdit,
      modalPostId: this.props.match.params.postId
    })
  }

  _editPost = (post) => {
    this.setState({
      title: post.title,
      author: post.author,
      category: post.category,
      body: post.body,
      modalEdit: !this.state.modalEdit,
      modalPostId: post.id
    })
  }

  _deletePost = (id) => {
    this.props.deletePost(id);
    this.props.history.push('/');
  }

  _votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

  render() {
    const { comments, post, categories } = this.props;
    const { modalEdit, modalPostId } = this.state;
    return(
      <div>
        { post &&
          <div key={post.id}>
            <If test={modalEdit && modalPostId === post.id}>
              <PostForm
                post={this.state}
                categories={categories}
                submitFunction={this.submitEditPost}
                handleFunction={this.handleInputChange}
                handleModal={this._cancelForm}
                labelModal={'Editar Post'}
              />
            </If>
            <If test={!modalEdit || modalPostId !== post.id}>
              <Post
                post={post}
                editAction={() => this._editPost(post)}
                deleteAction={() => this._deletePost(post.id)}
                upVote={() => this._votePost(post.id, 'upVote')}
                downVote={() => this._votePost(post.id, 'downVote')}
              />
            </If>
          </div>
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
    post: state.posts.postDetail,
    categories: state.categories.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentsById: (postId) => dispatch(commentsPostIdRequest(postId)),
    getPostById: (postId) => dispatch(postRequest(postId)),
    deletePost: (postId) => dispatch(deletePostRequest(postId)),
    votePost: (postId, vote) => dispatch(votePostRequest(postId, vote)),
    editPost: (post, postId) => dispatch(editPostRequest(post, postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
