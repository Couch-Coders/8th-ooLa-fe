import styled, { css } from 'styled-components';

const noneClickStyle = css`
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const IconContainer = styled.li`
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  margin: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: all 0.2s ease;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #fff;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
  ${({ isClicked, isEmpty }) => !isEmpty && !isClicked && noneClickStyle}
`;

export const IconWrapper = styled.div`
  text-align: center;
  font-size: 10px;
  width: 70%;
  height: 70%;
`;
export const TechName = styled.span`
  text-align: center;
`;
