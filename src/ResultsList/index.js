import React from 'react';
import styled from 'react-emotion';
import format from 'date-fns/format';

const ConfessionContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  max-width: 560px;
  margin: 0 auto;
`;

const Confession = styled('div')`
  width: 100%;
  border-bottom: 1px solid #000;
  font-family: 'Cabin', sans-serif;
  padding: 20px 0;
`;

const DateString = styled('span')`
  color: #FF294C;
  font-family: 'Cabin', sans-serif;
  text-transform: uppercase;
`;

const Title = styled('p')`
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
`;

const Content = styled('p')`
  color: #666;
  margin: 0;
`;

const ResultsList = (props) => {
  // console.log(results);
  const { results } = props;
  return (
    <ConfessionContainer>
      {results.map(result => (
        <Confession key={result.id}>
          <DateString>{format(result.timePosted, 'MMM D')}</DateString>
          <Title>{result.title}</Title>
          <Content>{result.content}</Content>
        </Confession>
      ))}
    </ConfessionContainer>
  );
};

export default ResultsList;
