import styled from 'styled-components';

export const StyledItemContainer = styled.li`
  display: flex;
  width: 60%;
  border-radius: 16px;
  background-color: rgba(211, 211, 211, 0.5);
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 2px 0px;
  &:nth-child(2) {
    background-color: rgba(15, 178, 242, 0.35);
    align-self: flex-end;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
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
