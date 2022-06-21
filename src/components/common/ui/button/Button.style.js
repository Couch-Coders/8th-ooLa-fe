import styled, { css } from 'styled-components';

const disabledBtn = css`
  border: 1px solid #d8d8d8;
  background-color: #d8d8d8;
  color: #666;
  cursor: default;
  font-weight: 400;
  &:hover,
  &:active,
  &:active {
    border: 1px solid #d8d8d8;
    background-color: #d8d8d8;
    color: #666;
    opacity: 1;
    cursor: default;
    font-weight: 400;
  }
`;

export const FilledBtn = styled.button`
  background: #0fb2f2;
  border: 0.1rem solid #0fb2f2;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 0.6em;
  min-height: 3.2rem;
  outline: 0;
  padding: 1.1em 1em;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  &:hover,
  &:active {
    background-color: #fff;
    color: #0fb2f2;
  }
  &:active {
    opacity: 0.5;
  }
  ${({ disabled }) => disabled && disabledBtn}
`;
export const KakaoOpenChatBtn = styled(FilledBtn)`
  background-color: #f5dd02;
  font-weight: 600;
  box-shadow: none;
  color: #371d1e;
  border-radius: 0.3rem;
  border: 0.1rem solid #f5dd02;
  &:hover,
  &:active {
    background-color: #f5d502;
    color: #371d1e;
    font-weight: 600;
    border-radius: 0.3rem;
    border: 0.1rem solid #f5dd02;
  }
  ${({ disabled }) => disabled && disabledBtn}
`;
export const OutlineBtn = styled(FilledBtn)`
  background-color: #fff;
  border: 1px solid #0fb2f2;
  color: #0fb2f2;
  padding: 1.1em 0.7em;
  box-shadow: none;
  &:hover,
  &:active {
    background: #0fb2f2;
    background-position: 0 0;
    color: #fff;
  }
  &:active {
    opacity: 0.5;
  }
  ${({ disabled }) => disabled && disabledBtn}
`;
