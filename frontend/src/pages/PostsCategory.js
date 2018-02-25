import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFromCategoryRequest, deletePostRequest, votePostRequest, editPostRequest, postCategorySortVoteRequest, postCategorySortDateRequest } from '../actions/PostsActions';
import { commentsPostIdRequest, deleteCommentRequest } from '../actions/CommentsActions';
import styled from 'styled-components';
import moment from 'moment';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import If from '../components/If';
import Button from '../components/Button';

class PostsCategory extends Component {
  state = {
    category: this.props.match.params.category,
    title: '',
    author: '',
    body: '',
    modalEdit: false,
    modalPostId: '',
    orderVote: false,
    orderDate: false
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
      timestamp: moment().valueOf(),
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

  _orderPostVote = (posts) => {
    this.setState({ orderVote: !this.state.orderVote })
    this.props.orderVote(posts, this.state.orderVote);
  }

  _orderPostDate = (posts) => {
    this.setState({ orderDate: !this.state.orderDate })
    this.props.orderDate(posts, this.state.orderDate);
  }

  render() {
    const { postsCategory, categories } = this.props;
    const { category, modalEdit, modalPostId } = this.state;

    return (
      <div>
        <If test={postsCategory === undefined || postsCategory.length <= 0 }>
          <ViewHeader>
            <Message>Nenhum post nesta categoria ou esta categoria não existe.</Message>
          </ViewHeader>
        </If>
        <If test={postsCategory && postsCategory.length > 0}>

          <ViewHeader>
            <HeaderTitle>{ category.toUpperCase() }</HeaderTitle>

            <ViewOrder>
              <Button
                type={'button'}
                action={() => this._orderPostVote(postsCategory)}
                label={'VOTOS'}
              />
              <HeaderTitle>|</HeaderTitle>
              <Button
                type={'button'}
                action={() => this._orderPostDate(postsCategory)}
                label={'DATA'}
              />
            </ViewOrder>
          </ViewHeader>

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

const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6em;
  margin-bottom: 2em;
`;

const HeaderTitle = styled.h1`
  color: #456990;
  font-size: 1em;
  font-weight: 700;
`;

const ViewOrder = styled.div`
  display: flex;
  justify-content: space-between,
  width: 15%;
`;

const Message = styled.p`
  color: #456990;
  margin: 0;
`;

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
    deleteComment: (commentId) => dispatch(deleteCommentRequest(commentId)),
    orderVote: (posts, order) => dispatch(postCategorySortVoteRequest(posts, order)),
    orderDate: (posts, order) => dispatch(postCategorySortDateRequest(posts, order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory);