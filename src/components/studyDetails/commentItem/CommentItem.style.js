import styled from 'styled-components';

export const CommentItemContainer = styled.div`
  border-top: 1px solid #999;
`;

export const CommentItemContent = styled.div``;

export const CommentItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem 0;
`;

export const CommentItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem 2rem;
  margin-top: 3rem;

  .CommentsContent {
    width: 80%;
    font-size: 1.6rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-top: 1.4rem;
    font-size: 1.5rem;
    color: #777777;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin: 1rem 1rem 2.8rem 0; */
`;

export const Nickname = styled.span`
  margin: 0 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Right = styled.div``;

export const EditBtn = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  border-radius: 0.3rem;
  width: 160px;
  padding: 0.6rem 1rem;
  margin-top: 1rem;
  border: solid 1px #d9d9d9;
  background-color: #fff;

  button {
    background-color: #fff;
    border-style: none;
    width: 100%;
    cursor: pointer;
    &:nth-child(3) {
      padding-bottom: 0rem;
    }
    &:hover {
      color: #0fb2f2;
    }
  }
`;
