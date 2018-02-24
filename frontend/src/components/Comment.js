import React from 'react';
import Proptypes from 'prop-types';
import Button from './Button';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/lib/fa';

const Comment = ({ comment, editAction, deleteAction, upVote, downVote }) => (
  <ViewComment>

    <ViewMain>
      <ViewContent>
        <Content>{ comment.body }</Content>
      </ViewContent>

      <ViewDetails>
        <DetailsInfo>{ moment(comment.timestamp).format('DD/MM/YYYY HH:mm') }h</DetailsInfo>
        <DetailsInfo>{ comment.author }</DetailsInfo>
      </ViewDetails>
    </ViewMain>

    <ViewButtons>
      <ViewEdit>
        <Button rose type={'button'} action={editAction} label={'EDITAR'}/>
        <Button rose type={'button'} action={deleteAction} label={'APAGAR'}/>
      </ViewEdit>
      <ViewVote>
        <Button rose type={'button'} action={downVote} label={<FaAngleDown/>}/>
        <Content info>{ comment.voteScore }</Content>
        <Button rose type={'button'} action={upVote} label={<FaAngleUp/>}/>
      </ViewVote>
    </ViewButtons>

  </ViewComment>
);

Comment.proptypes = {
  comment: Proptypes.object.isRequired,
  editAction: Proptypes.func.isRequired,
  deleteAction: Proptypes.func.isRequired,
  upVote: Proptypes.func.isRequired,
  downVote: Proptypes.func.isRequired
};

const ViewComment = styled.div`
  display: flex;
  min-width: 100%;
  padding: 0 6em;
  flex-direction: column;
`;

const ViewMain = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  border-left: 4px solid #f45b69;
  background: #f0fdee;
`;

const ViewContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.p`
  color: #456990;
  margin: 0;
  padding: 0;

  ${props => props.info && css`
    color: #f45b69;
    font-size: 0.8em;
    font-weight: 700;
  `}
`;

const ViewDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailsInfo = styled.p`
  font-size: 0.7em;
  color: #456990;
  margin: 1em 0 0 0;
`;

const ViewButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.3em 0;
`;

const ViewEdit = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewVote = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Comment;
