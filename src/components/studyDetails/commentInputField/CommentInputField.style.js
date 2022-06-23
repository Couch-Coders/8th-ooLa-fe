import styled from 'styled-components';

export const CommentInputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  .ant-btn {
    margin-bottom: 4rem;
    display: inline-block;
    margin-left: auto;
  }

  p {
    margin-top: 1rem;
    color: #f56a00;
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

export const InputField = styled.div`
  margin: 2.8rem 0;
`;
