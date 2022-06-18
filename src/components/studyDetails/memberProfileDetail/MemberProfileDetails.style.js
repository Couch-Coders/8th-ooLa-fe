import styled from 'styled-components';

export const StyledTitle = styled.h3`
  font-size: 2rem;
  & > span {
    color: blue;
    font-weight: 600;
  }
`;

export const TechsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  align-items: center;
  margin: 10px 0;
`;

export const IntroduceContainer = styled.div`
  width: 100%;
  height: 30rem;
  margin: 4rem auto 0;
  background-color: blue;
  border-radius: 1.6rem;
  padding: 3rem;
`;
