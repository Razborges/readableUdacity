import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPostRequest } from '../actions/PostsActions';
//import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import moment from 'moment';

import InputForm from '../components/InputForm';
import Button from '../components/Button';

class AddPost extends Component {
  state = {
    title: '',
    author: '',
    category: 'react',
    content: ''
  }

  handleInputChange = (e) => {
    const target = e.target
    const { value, name } = target

    this.setState({ [name]: value })
  }

  submitNewPost = (e) => {
    e.preventDefault()
    const post = {
      id: uuid(),
      timestamp: moment(),
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
      category: this.state.category,
      voteScore: 0,
      deleted: false
    };
    this.props.newPost(post);
    this.props.history.push('/');
  }
  
  render() {
    const { title, author, category, content } = this.state;
    const { categories } = this.props;
    return (
      <div>
        <h1>Novo Post</h1>
        <form onSubmit={this.submitNewPost}>
          <InputForm
            label={'Título:'}
            name={'title'}
            holder={'título do post'}
            value={title}
            onChange={this.handleInputChange}
          />

          <InputForm
            label={'Autor:'}
            name={'author'}
            holder={'nome do autor'}
            value={author}
            onChange={this.handleInputChange}
          />

          <label htmlFor='category'>
            Categoria:
            <select
              type='text'
              name='category'
              id='category'
              value={category}
              onChange={this.handleInputChange}
              required='required'
            >
              { categories &&
                categories.map(category => (
                  <option value={category.name} key={uuid()}>{category.name}</option>
                ))
              }
            </select>
          </label>

          <label htmlFor='content'>
            Mensagem:
            <textarea
              name='content'
              id='content'
              value={content}
              onChange={this.handleInputChange}
              required='required'
            />
          </label>

          <Button
            type={'text'}
            action={() => this.props.history.push('/')}
            label={'Cancelar'}
          />
          <Button
            type={'submit'}
            
            label={'Salvar'}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (post) => dispatch(newPostRequest(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);