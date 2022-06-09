import styled from 'styled-components';
import Button from '../../common/ui/button/Button.component';

export const StyledForm = styled.form`
  text-align: left;
  padding: 0 10rem 6rem;
`;

export const StyledButton = styled(Button)`
  text-align: center;
  font-size: 1.8rem;
  padding: 1em 3em;
  display: block;
  margin: 4rem auto 0;
`;

export const ProfileImgContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const ProfileImgWapper = styled.div`
  display: inline-block;
  padding: 5px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 8rem;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const UrlInputFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    margin-right: 2rem;
    flex: 1;
    width: calc(50% - 2rem);
    &:last-child {
      margin-right: 0;
    }
  }
`;
