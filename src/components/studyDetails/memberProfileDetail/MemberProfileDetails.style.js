import styled from 'styled-components';

export const StyledTitle = styled.h3`
  font-size: 2rem;
  & > span {
    color: #1890ff;
    font-weight: 600;
  }
`;

export const TechsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  align-items: center;
  margin: 1rem 0 0 0.2rem;
`;

export const IntroduceContainer = styled.div`
  width: 100%;
  height: 30rem;
  margin: 2rem auto 0;
  background-color: rgba(205, 240, 255, 0.3);
  border-radius: 1.6rem;
  padding: 3rem;
`;
