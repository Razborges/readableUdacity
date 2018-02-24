import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/lib/fa';

const Post = ({ post, editAction, deleteAction, upVote, downVote }) => (
  <ViewPost>

    <ViewHeader>
      <HeaderTitle>
        <HeaderTitleLink to={`/${post.category}/${post.id}`}>{ post.title.toUpperCase() }</HeaderTitleLink>
      </HeaderTitle>
      <HeaderAuthor>{ post.author.toUpperCase() }</HeaderAuthor>
    </ViewHeader>

    <ViewDetails>
      <DetailsInfo>{ moment(post.timestamp).format('DD/MM/YYYY HH:mm') }h</DetailsInfo>
      <DetailsInfo>{ post.commentCount } comentários</DetailsInfo>
    </ViewDetails>

    <ViewCategory>
      <CategoryLink to={`/${post.category}`}>{ post.category.toUpperCase() }</CategoryLink>
    </ViewCategory>

    <ViewContent>
      <Content>{ post.body }</Content>
    </ViewContent>

    <ViewButtons>
      <ViewEdit>
        <Button primary type={'button'} action={editAction} label={'EDITAR'}/>
        <Button primary type={'button'} action={deleteAction} label={'APAGAR'}/>
      </ViewEdit>
      <ViewVote>
        <Button primary type={'button'} action={downVote} label={<FaAngleDown/>}/>
        <Content info>{ post.voteScore }</Content>
        <Button primary type={'button'} action={upVote} label={<FaAngleUp/>}/>
      </ViewVote>
    </ViewButtons>

  </ViewPost>
);

Post.proptypes = {
  post: Proptypes.object.isRequired,
  editAction: Proptypes.func.isRequired,
  deleteAction: Proptypes.func.isRequired,
  upVote: Proptypes.func.isRequired,
  downVote: Proptypes.func.isRequired
};

const ViewPost = styled.div`
  display: flex;
  min-width: 100%;
  padding: 0 6em;
  flex-direction: column;
`;

const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3em 0;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

const HeaderTitleLink = styled(Link)`
  font-weight: 700;
  color: #f45b69;
  text-decoration: none;
    &:hover {
      color: #114b5f;
    }
`;

const HeaderAuthor = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #f45b69;
`;

const ViewDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailsInfo = styled.p`
  font-size: 0.7em;
  color: #456990;
  margin: 0;
`;

const ViewCategory = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.7em 0;
`;

const CategoryLink = styled(Link)`
  font-weight: 700;
  font-size: 0.8em;
  color: #114b5f;
  text-decoration: none;
    &:hover {
      color: #f45b69;
    }
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
    font-size: 0.8em;
    font-weight: 700;
  `}
`;

const ViewButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
  padding-bottom: 2em;
  border-bottom: 1px dotted #456990;
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

export default Post;
