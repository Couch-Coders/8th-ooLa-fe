import styled from 'styled-components';

export const AnswerCommentItemContainer = styled.div`
  border-top: 1px solid #999;
`;

export const AnswerCommentItemContent = styled.div``;

export const AnswerCommentItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px 0;
`;

export const AnswerCommentItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  margin-left: 44px;

  .CommentsContent {
    width: 80%;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
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
    /* padding: 5px 0; */
    width: 100%;
    cursor: pointer;
  }
`;
