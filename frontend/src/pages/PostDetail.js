import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postRequest, deletePostRequest, votePostRequest, editPostRequest } from '../actions/PostsActions';
import { commentsPostIdRequest, newCommentRequest, deleteCommentRequest, voteCommentRequest, editCommentRequest } from '../actions/CommentsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import moment from 'moment';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import If from '../components/If';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';
import Button from '../components/Button';
import NotFound from '../pages/NotFound';

class PostDetail extends Component {
  state = {
    title: '',
    author: '',
    category: 'react',
    body: '',
    modalEdit: false,
    modalPostId: this.props.match.params.postId,
    authorComment: '',
    bodyComment: '',
    modalCommentId: '',
    modalCommentEdit: false,
    modalCommentNew: false
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
    e.preventDefault();
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
    this.props.comments.forEach(comment => {
      this._deleteComment(comment.id)
    });
    this.props.history.push('/');
  }

  _votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

  _newcomment = () => {
    this.setState({ modalCommentNew: !this.state.modalCommentNew })
  }

  _editcomment = () => {
    this.setState({ modalCommentEdit: !this.state.modalCommentNew })
  }

  _submitNewComment = (e) => {
    e.preventDefault();
    const comment = {
      id: uuid(),
      timestamp: moment(),
      body: this.state.bodyComment,
      author: this.state.authorComment,
      parentId: this.state.modalPostId
    }
    this._cancelCommentForm();
    this.props.newComment(comment);
  }

  _cancelCommentForm = () => {
    this.setState({
      authorComment: '',
      bodyComment: '',
      modalCommentId: '',
      modalCommentEdit: false,
      modalCommentNew: false
    })
  }

  _deleteComment = (id) => {
    this.props.deleteComment(id);
  }

  _voteComment = (id, vote) => {
    this.props.voteComment(id, vote);
  }

  _editComment = (comment) => {
    this.setState({
      authorComment: comment.author,
      bodyComment: comment.body,
      modalCommentId: comment.id,
      modalCommentEdit: !this.state.modalCommentEdit,
      modalCommentNew: false
    })
  }

  _submitEditComment = (e) => {
    e.preventDefault();
    const comment = {
      id: this.state.modalCommentId,
      timestamp: moment(),
      body: this.state.bodyComment,
      author: this.state.authorComment,
      parentId: this.state.modalPostId
    }
    this._cancelCommentForm();
    this.props.editComment(comment, comment.id);
  }

  render() {
    const { comments, post, categories } = this.props;
    const { modalEdit, modalPostId, modalCommentNew, modalCommentEdit, modalCommentId } = this.state;

    return(
      <div>
        <If test={post === undefined || Object.keys(post) <= 0 || post.error}>
          <NotFound/>
        </If>
        <If test={post && Object.values(post).length && !post.error}>
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
              <Button
                type={'button'}
                action={() => this._newcomment()}
                label={'COMENTAR'}
              />
            </div>
          }

          <If test={modalCommentNew}>
            <CommentForm
              comment={this.state}
              submitFunction={this._submitNewComment}
              handleFunction={this.handleInputChange}
              handleModal={this._cancelCommentForm}
              labelModal={'Novo Comentário'}
            />
          </If>

          {comments && 
            comments.map(comment => (
              <div key={comment.id}>
                <If test={modalCommentEdit && modalCommentId === comment.id}>
                  <CommentForm
                    comment={this.state}
                    submitFunction={this._submitEditComment}
                    handleFunction={this.handleInputChange}
                    handleModal={this._cancelCommentForm}
                    labelModal={'Editar Comentário'}
                  />
                </If>
                <If test={!modalCommentEdit || modalCommentId !== comment.id}>
                  <Comment
                    comment={comment}
                    editAction={() => this._editComment(comment)}
                    deleteAction={() => this._deleteComment(comment.id)}
                    upVote={() => this._voteComment(comment.id, 'upVote')}
                    downVote={() => this._voteComment(comment.id, 'downVote')}
                  />
                </If>
              </div>
            ))
          }
        </If>
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
    editPost: (post, postId) => dispatch(editPostRequest(post, postId)),
    newComment: (comment) => dispatch(newCommentRequest(comment)),
    deleteComment: (commentId) => dispatch(deleteCommentRequest(commentId)),
    voteComment: (commentId, vote) => dispatch(voteCommentRequest(commentId, vote)),
    editComment: (comment, commentId) => dispatch(editCommentRequest(comment, commentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
