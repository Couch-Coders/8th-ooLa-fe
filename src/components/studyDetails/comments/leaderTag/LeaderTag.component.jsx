import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  background: #0fb2f2;
  border: 0.1rem solid #0fb2f2;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  border-radius: 0.3rem;
  color: #ffffff;
  box-sizing: border-box;
  padding: 0.2em 0.7em;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 1.6rem;
`;

const LeaderTag = () => {
  return <Tag>Leader</Tag>;
};

export default LeaderTag;
