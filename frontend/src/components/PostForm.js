import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import Button from '../components/Button';

const PostForm = ({ post, categories, submitFunction, handleFunction, handleModal, labelModal }) => {

  return (
    <ViewPostForm>
      <HeaderTitle>{ labelModal.toUpperCase() }</HeaderTitle>

      <ViewForm onSubmit={ submitFunction }> 

        <InputForm
          label={'Título'}
          name={'title'}
          holder={'título do post'}
          value={post.title}
          onChange={handleFunction}
        />

        <InputForm
          label={'Autor'}
          name={'author'}
          holder={'nome do autor'}
          value={post.author}
          onChange={handleFunction}
        />

        <Title htmlFor='category'>
          CATEGORIA
        </Title>
        <SelectForm
          type='text'
          name='category'
          id='category'
          value={post.category}
          onChange={handleFunction}
        >
          { categories &&
            categories.map(category => (
              <option value={ category.name } key={uuid()}>{ category.name.toUpperCase() }</option>
            ))
          }
        </SelectForm>

        <Title htmlFor='body'>
          CONTEÚDO
        </Title>
        <PrimaryTextArea
          name='body'
          id='body'
          value={post.body}
          placeholder='DIGITE O SEU POST'
          onChange={handleFunction}
        />

        <ViewButtons>
          <Button
            type={'button'}
            action={handleModal}
            label={'CANCELAR'}
          />
          <Button
            roseLarge
            type={'submit'}
            label={'SALVAR'}
          />
        </ViewButtons>

      </ViewForm>
    </ViewPostForm>
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

const ViewPostForm = styled.div`
  display: flex;
  min-width: 100%;
  padding: 0 6em;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  color: #456990;
  font-size: 1em;
  font-weight: 700;
`;

const ViewForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
  color: #456990;
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 0.8em;
  margin: 2em 0 0.8em 0;
`;

const SelectForm = styled.select`
  background: #f0fdee;
  height: 40px;
  border: none;
  border-left: 3px solid #f45b69;
  border-radius: none;
  appearance: none;
  outline: none;
  border-radius: 0;
  padding: 1em 0 1em 1em;
  color: #456990;
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 1.5em;

    &:hover {
      color: #f45b69;
    }
`;

const PrimaryTextArea = styled.textarea`
  background-color: #f0fdee;
  height: 80px;
  border: none;
  border-left: 3px solid #f45b69;
  padding: 1em 0 1em 1em;
  color: #456990;
  font-size: 0.8em;
  margin-bottom: 1.5em;

    &::placeholder {
      color: #f45b69;
      font-size: 0.8em;
      font-weight: 700;
    }
`;

const ViewButtons = styled.div`
  width: 40%;
  align-self: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 3em;
`;

export default PostForm;