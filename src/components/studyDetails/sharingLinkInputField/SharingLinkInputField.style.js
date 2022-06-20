import styled from 'styled-components';
import Button from '../../common/ui/button/Button.component';

export const SharingLinkInputFieldContainer = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  display: flex;
  background-color: rgba(205, 240, 255, 0.3);
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 2px 0px;
  border-radius: 20px;
  padding: 3rem;
`;

export const InputFieldWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1.6rem;
  label {
    position: absolute;
    left: 5rem;
    top: 0.7rem;
    font-size: 1.8rem;
    font-weight: 700;
    display: block;
    margin: 1rem 3rem;
    display: block;
    width: 15%;
    color: #777;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 4rem;
  display: block;
  padding: 3rem 3rem 3rem 15rem;
  box-sizing: border-box;
  border-radius: 4rem;
  border: 0;
  border: 2px solid #cdf0ff;
  &:focus {
    border: 0;
    outline: 0;
    border: 2px solid #1890ff;
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  margin: 3rem;
  width: 8rem;
  height: 8rem;
`;
