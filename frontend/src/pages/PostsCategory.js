import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFromCategoryRequest, deletePostRequest, votePostRequest, editPostRequest } from '../actions/PostsActions';
import { commentsPostIdRequest, deleteCommentRequest } from '../actions/CommentsActions';
//import PropTypes from 'prop-types';
import moment from 'moment';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import If from '../components/If';
import NotFound from '../pages/NotFound';

class PostsCategory extends Component {
  state = {
    category: this.props.match.params.category,
    title: '',
    author: '',
    body: '',
    modalEdit: false,
    modalPostId: ''
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
      modalPostId: ''
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

  _deletePost = (id, category) => {
    this.props.deletePost(id, category);
  }

  _votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

  render() {
    const { postsCategory, categories } = this.props;
    const { category, modalEdit, modalPostId } = this.state;

    return (
      <div>
        <If test={postsCategory === undefined || postsCategory.length <= 0 }>
          <NotFound/>
        </If>
        <If test={postsCategory && postsCategory.length > 0}>
          <h1>{ category.toUpperCase() }</h1>
          {postsCategory &&
            postsCategory.map(post => (
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
            ))
          }
        </If>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsCategory: state.posts.postsCategory,
    categories: state.categories.items,
    comments: state.comments.commentsPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsFromCategory: (category) => dispatch(postsFromCategoryRequest(category)),
    deletePost: (postId, category) => dispatch(deletePostRequest(postId, category)),
    votePost: (postId, vote) => dispatch(votePostRequest(postId, vote)),
    editPost: (post, postId) => dispatch(editPostRequest(post, postId)),
    getCommentsById: (postId) => dispatch(commentsPostIdRequest(postId)),
    deleteComment: (commentId) => dispatch(deleteCommentRequest(commentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory);