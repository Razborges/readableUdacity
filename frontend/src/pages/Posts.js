import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postsRequest, deletePostRequest, votePostRequest, editPostRequest } from '../actions/PostsActions';
import { commentsPostIdRequest, deleteCommentRequest } from '../actions/CommentsActions';
import styled from 'styled-components';
import moment from 'moment';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import If from '../components/If';
import Button from '../components/Button';

class Posts extends Component {
  state = {
    title: '',
    author: '',
    category: 'react',
    body: '',
    modalEdit: false,
    modalPostId: ''
  }

  componentDidMount() {
    this.props.getPosts();
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

  _deletePost = (id) => {
    this.props.deletePost(id);
  }

  _votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

  render() {
    const { modalEdit, modalPostId } = this.state;
    const { allPosts, categories } = this.props;

    return (
      <div>
        <If test={allPosts === undefined || allPosts.length <= 0}>
          <ViewMessage>
            <Message>Nenhum post foi cadastrado até o momento.</Message>
            <Message>Clique para adicionar um <Link to='/addpost'>novo post</Link>.</Message>
          </ViewMessage>
        </If>

        <If test={allPosts && allPosts.length > 0}>
          <ViewHeader>
            <HeaderTitle>TODOS OS POSTS</HeaderTitle>

            <ViewOrder>
              <Button
                type={'button'}
                action={() => this._newcomment()}
                label={'VOTOS'}
              />
              <HeaderTitle>|</HeaderTitle>
              <Button
                type={'button'}
                action={() => this._newcomment()}
                label={'DATA'}
              />
            </ViewOrder>
          </ViewHeader>
        
          {allPosts &&
            allPosts.map(post => (
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
  justify-content: space-between;
  width: 15%;
`;

const ViewMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6em;
  margin-bottom: 2em;
`;

const Message = styled.p`
  color: #456990;
  margin: 0 0 2em 0;
`;

const mapStateToProps = (state) => {
  return {
    allPosts: state.posts.allposts,
    categories: state.categories.items,
    comments: state.comments.commentsPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(postsRequest()),
    deletePost: (postId) => dispatch(deletePostRequest(postId)),
    votePost: (postId, vote) => dispatch(votePostRequest(postId, vote)),
    editPost: (post, postId) => dispatch(editPostRequest(post, postId)),
    getCommentsById: (postId) => dispatch(commentsPostIdRequest(postId)),
    deleteComment: (commentId) => dispatch(deleteCommentRequest(commentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
