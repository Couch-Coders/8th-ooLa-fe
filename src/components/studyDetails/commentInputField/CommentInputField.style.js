import styled from 'styled-components';
import Button from '../../common/ui/button/Button.component';

export const CommentInputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 1rem;
    color: #f56a00;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Nickname = styled.span`
  margin: 0 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const InputField = styled.div`
  margin: 2.8rem 0;
  textarea {
    width: 100%;
    padding: 16px;
    box-shadow: rgb(17 17 26 / 10%) 0px 1px 0px;
    font-size: 1.6rem;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: none;
    transition: all ease-in 0.2s;
    &:focus {
      border: 1px solid #0fb2f2;
    }
  }
`;

export const StyledButton = styled(Button)`
  display: inline-block;
  margin-left: auto;
  width: 8rem;
  height: 8rem;
  margin-bottom: 4rem;
`;
