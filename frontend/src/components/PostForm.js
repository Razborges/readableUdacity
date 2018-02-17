import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import InputForm from '../components/InputForm';
import Button from '../components/Button';

const PostForm = ({ post, categories, submitFunction, handleFunction, handleModal, labelModal }) => {

  return (
    <div>
      <h1>{labelModal}</h1>
      <form onSubmit={submitFunction}>
        <InputForm
          label={'Título:'}
          name={'title'}
          holder={'título do post'}
          value={post.title}
          onChange={handleFunction}
        />

        <InputForm
          label={'Autor:'}
          name={'author'}
          holder={'nome do autor'}
          value={post.author}
          onChange={handleFunction}
        />

        <label htmlFor='category'>
          Categoria:
          <select
            type='text'
            name='category'
            id='category'
            value={post.category}
            onChange={handleFunction}
          >
            { categories &&
              categories.map(category => (
                <option value={category.name} key={uuid()}>{category.name}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor='body'>
          Mensagem:
          <textarea
            name='body'
            id='body'
            value={post.body}
            onChange={handleFunction}
          />
        </label>

        <Button
          type={'button'}
          action={handleModal}
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

PostForm.proptypes = {
  post: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  submitFunction: PropTypes.func.isRequired,
  handleFunction: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  labelModal: PropTypes.string.isRequired,
}

export default PostForm;