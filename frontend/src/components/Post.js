import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import moment from 'moment';

const Post = ({ post, editAction, deleteAction, upVote, downVote }) => (
  <div>
    <h1>
      <Link to={`/${post.category}/${post.id}`}>{ post.title }</Link>
    </h1>
    <p>
      <Link to={`/${post.category}`}>{post.category}</Link>
    </p>
    <p>{ post.author }</p>
    <p>{ post.commentCount }</p>
    <p>{ moment(post.timestamp).format('DD/MM/YYYY HH:mm') }h</p>

    <p>{ post.body }</p>
    <Button type={'button'} action={editAction} label={'EDITAR'}/>
    <Button type={'button'} action={deleteAction} label={'APAGAR'}/>
    <Button type={'button'} action={upVote} label={'CURTIR'}/>
    <p>{ post.voteScore }</p>
    <Button type={'button'} action={downVote} label={'DESCURTIR'}/>
  </div>
);

Post.proptypes = {
  post: Proptypes.object.isRequired,
  editAction: Proptypes.func.isRequired,
  deleteAction: Proptypes.func.isRequired,
  upVote: Proptypes.func.isRequired,
  downVote: Proptypes.func.isRequired
};

export default Post;
