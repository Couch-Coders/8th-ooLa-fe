import styled from 'styled-components';

export const StyledItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5em 2.3em;
  margin-bottom: 2.5rem;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 2px solid #cdf0ff;
  color: #000;
  font-weight: 500;
  font-size: 1.8rem;
  border-radius: 2rem;
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding: 1em 3em;
  max-width: 70%;
`;

export const StyledLink = styled.a`
  display: flex;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid #cdf0ff;
  font-size: 3rem;
  position: absolute;
  right: 3rem;
  color: #0fb2f2;
  transition: all 0.3s;
  &:hover {
    background-color: #0fb2f2;
    border: 2px solid #0fb2f2;
    color: #fff;
    font-size: 3.5rem;
  }
`;

export const StyledDate = styled.span`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.8rem;
`;
export const StyledContent = styled.p`
  font-size: 1.6rem;
`;
