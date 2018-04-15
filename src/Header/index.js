import React from 'react';
import styled from 'react-emotion';

const TitleContainer = styled('div')`
  max-width: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 0 20px;
  flex-direction: column;
`;

const Title = styled('h1')`
  color: transparent;
  text-stroke: 1px #ff294c;
  -webkit-text-stroke: 1px #ff294c;
  text-align: center;
  font-size: calc(60px + 2vw);
  margin: 0;
`;

const Header = () => (
  <TitleContainer>
    <Title>
      Food Stories
    </Title>
  </TitleContainer>
);

export default Header;
