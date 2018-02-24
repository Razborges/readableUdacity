import React from 'react';
import styled from 'styled-components';

const NotFound = () => (
  <ViewHeader>
    <HeaderTitle>404 - Página não encontrada</HeaderTitle>
  </ViewHeader>
);

const ViewHeader = styled.div`
  display: flex;
  padding: 0 6em;
  margin-bottom: 2em;
`;

const HeaderTitle = styled.h1`
  color: #456990;
  font-size: 3em;
  font-weight: 700;
`;

export default NotFound;
