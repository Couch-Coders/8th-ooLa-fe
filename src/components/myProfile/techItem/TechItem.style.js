import styled, { css } from 'styled-components';

<<<<<<< HEAD
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
=======
// const noneClickStyle = css`
//   &::before {
//     display: block;
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 3;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.3);
//   }
// `;
>>>>>>> 1d273d1 (마이프로필 레이아웃)
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const IconContainer = styled.li`
  position: relative;
  flex-shrink: 0;
  display: block;
  width: 50px;
  height: 50px;
  padding: 12px 0;
  margin: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: all 0.2s ease;
  overflow: hidden;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
<<<<<<< HEAD
  ${({ isClicked, isEmpty }) => !isEmpty && !isClicked && noneClickStyle}
`;
=======
`;
// ${({ isClicked, isEmpty }) => !isEmpty && !isClicked && noneClickStyle}
>>>>>>> 1d273d1 (마이프로필 레이아웃)

export const IconWrapper = styled.div`
  text-align: center;
  font-size: 10px;
`;
