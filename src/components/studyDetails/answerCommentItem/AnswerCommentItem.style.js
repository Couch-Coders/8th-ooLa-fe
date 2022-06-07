import styled from 'styled-components';

export const AnswerCommentItemContainer = styled.div`
  border-top: 1px solid #999;
`;

export const AnswerCommentItemContent = styled.div``;

export const AnswerCommentItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem 4rem 0;
`;

export const AnswerCommentItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem 2rem;
  margin-left: 4.4rem;

  .CommentsContent {
    width: 80%;
    font-size: 1.6rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.6rem;
    color: #777777;
  }
`;

export const Right = styled.div``;

export const EditBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 10px 0;
  border: solid 1px #d9d9d9;
  background-color: #fff;

  button {
    background-color: #fff;
    border-style: none;
    width: 100%;
    cursor: pointer;
  }
`;
