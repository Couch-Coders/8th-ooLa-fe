import styled from 'styled-components';

export const StyledItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 60%;
  margin-bottom: 2.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(211, 211, 211, 0.5);
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 2px 0px;
  border-radius: 40px;
  padding: 1em 3em;
  align-items: center;
  max-width: 80%;
  position: relative;
  &: after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 1.063em solid transparent;
    border-right-color: rgba(211, 211, 211, 0.5);
    border-left: 0;
    border-top: 0;
    margin-top: -0.531em;
    margin-left: -1.062em;
  }
`;

export const StyledLink = styled.a`
  font-size: 4rem;
`;

export const StyledDate = styled.span`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.8rem;
`;
export const StyledContent = styled.p`
  font-size: 1.6rem;
`;
