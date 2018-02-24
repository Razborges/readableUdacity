import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import Button from '../components/Button';

const CommentForm = ({ comment, submitFunction, handleFunction, handleModal, labelModal }) => {
  return (
    <ViewPostForm>
      <ViewForm onSubmit={submitFunction}>

        <Title htmlFor='bodyComment'>
          COMENTÁRIO
        </Title>
          <PrimaryTextArea
            name='bodyComment'
            id='bodyComment'
            value={comment.bodyComment}
            placeholder='DIGITE O SEU COMENTÁRIO'
            onChange={handleFunction}
          />

        <InputForm
          label={'Autor:'}
          name={'authorComment'}
          holder={'nome do autor'}
          value={comment.authorComment}
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
            label={'COMENTAR'}
          />
        </ViewButtons>

      </ViewForm>
    </ViewPostForm>
  )
}

CommentForm.proptypes = {
  comment: PropTypes.object.isRequired,
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

const PrimaryTextArea = styled.textarea`
  background-color: #f0fdee;
  height: 50px;
  border: none;
  border-left: 3px solid #f45b69;
  padding: 1em 0 1em 1em;
  color: #456990;
  font-size: 0.8em;

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
  margin-bottom: 2em;
`;

export default CommentForm;