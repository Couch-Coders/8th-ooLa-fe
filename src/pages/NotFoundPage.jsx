import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 90vh;

  h2 {
    font-size: 15rem;
    font-weight: 600;
    color: #0fb2f2;
    margin-bottom: 0;
  }

  p {
    font-size: 2.6rem;
    font-weight: 600;
    color: #777777;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFound>
      <h2>404</h2>
      <p>PAGE NOT FOUND</p>
    </NotFound>
  );
};

export default NotFoundPage;
