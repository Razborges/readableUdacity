import React from 'react';
import PropTypes from 'prop-types';

import InputForm from '../components/InputForm';
import Button from '../components/Button';

const CommentForm = ({ comment, submitFunction, handleFunction, handleModal, labelModal }) => {
  return (
    <div>
      <h1>{labelModal}</h1>
      <form onSubmit={submitFunction}>
        <label htmlFor='bodyComment'>
          Comentário:
          <textarea
            name='bodyComment'
            id='bodyComment'
            value={comment.bodyComment}
            onChange={handleFunction}
          />
        </label>

        <InputForm
          label={'Autor:'}
          name={'authorComment'}
          holder={'nome do autor'}
          value={comment.authorComment}
          onChange={handleFunction}
        />

        <Button
          type={'button'}
          action={handleModal}
          label={'Cancelar'}
        />
        <Button
          type={'submit'}
          label={'Comentar'}
        />
      </form>
    </div>
  )
}

CommentForm.proptypes = {
  comment: PropTypes.object.isRequired,
  submitFunction: PropTypes.func.isRequired,
  handleFunction: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  labelModal: PropTypes.string.isRequired,
}

export default CommentForm;