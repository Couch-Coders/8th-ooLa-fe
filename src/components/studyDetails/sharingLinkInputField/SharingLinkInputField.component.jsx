import React from 'react';
import {
  SharingLinkInputFieldContainer,
  InputField,
  InputFieldWrapper,
  StyledInput,
  StyledButton,
} from './SharingLinkInputField.style';

const SharingLinkInputField = () => {
  return (
    <form>
      <SharingLinkInputFieldContainer>
        <InputFieldWrapper>
          <InputField>
            <h4>한줄 코멘트</h4>
            <StyledInput size="large" />
          </InputField>
          <InputField>
            <h4>url 주소</h4>
            <StyledInput size="large" />
          </InputField>
        </InputFieldWrapper>
        <StyledButton>제출</StyledButton>
      </SharingLinkInputFieldContainer>
    </form>
  );
};
export default SharingLinkInputField;
