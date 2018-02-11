import React from 'react';
import Proptypes from 'prop-types';
import Button from './Button';
import moment from 'moment';

const Comment = ({ comment, editAction, deleteAction, upVote, downVote }) => (
  <div>
    <p>{ comment.author }</p>
    <p>{ moment(comment.timestamp).format('DD/MM/YYYY HH:mm') }h</p>

    <p>{ comment.body }</p>
    <Button type={'button'} action={editAction} label={'EDITAR'}/>
    <Button type={'button'} action={deleteAction} label={'APAGAR'}/>
    <Button type={'button'} action={upVote} label={'SHOW'}/>
    <p>{ comment.voteScore }</p>
    <Button type={'button'} action={downVote} label={'AFF!'}/>
  </div>
);

Comment.proptypes = {
  comment: Proptypes.object.isRequired,
  editAction: Proptypes.func.isRequired,
  deleteAction: Proptypes.func.isRequired,
  upVote: Proptypes.func.isRequired,
  downVote: Proptypes.func.isRequired
};

export default Comment;
