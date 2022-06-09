import React from 'react';
import {
  SharingLinkInputFieldContainer,
  InputField,
  InputFieldWrapper,
  StyledInput,
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
        <button>제출</button>
      </SharingLinkInputFieldContainer>
    </form>
  );
};
export default SharingLinkInputField;
