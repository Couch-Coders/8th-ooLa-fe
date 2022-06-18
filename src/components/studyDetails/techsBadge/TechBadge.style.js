import styled, { css } from 'styled-components';

const modalIconStyle = css`
  width: 4rem;
  height: 4rem;
  padding: 0.7rem;
`;

export const IconContainer = styled.span`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  &:last-child {
    margin-right: 0;
  }
  ${({ type }) => type === 'modal' && modalIconStyle}
`;
