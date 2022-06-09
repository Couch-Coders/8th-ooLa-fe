import styled from 'styled-components';
import { Input } from 'antd';

export const SharingLinkInputFieldContainer = styled.div`
  margin-bottom: 10rem;
  width: 100%;
  display: flex;
  background-color: rgba(205, 240, 255, 0.3);
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 2px 0px;
  border-radius: 20px;
  padding: 3rem;
  h4 {
    font-size: 1.8rem;
    font-weight: 700;
    display: block;
    margin: 1rem 3rem;
    display: block;
    width: 15%;
  }

  button {
    display: block;
    margin: auto;
    width: 8rem;
    height: 8rem;
  }
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
`;

export const StyledInput = styled(Input)`
  width: 85%;
`;
