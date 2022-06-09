import React from 'react';
import { Input } from 'antd';
import {
  SharingLinkInputFieldContainer,
  InputField,
  InputFieldWrapper,
} from './SharingLinkInputField.style';

const SharingLinkInputField = () => {
  return (
    <form>
      <SharingLinkInputFieldContainer>
        <InputFieldWrapper>
          <InputField>
            <h4>한줄 코멘트</h4>
            <Input size="large" />
          </InputField>
          <InputField>
            <h4>url 주소</h4>
            <Input size="large" />
          </InputField>
        </InputFieldWrapper>
        <button>제출</button>
      </SharingLinkInputFieldContainer>
    </form>
  );
};
export default SharingLinkInputField;
