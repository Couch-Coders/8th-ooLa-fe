import React from 'react';
import { Input } from 'antd';
import {
  StyledInputField,
  StyledInputFieldTItle,
} from './ProfileInputField.style';

const ProfileInputField = () => {
  return (
    <StyledInputField>
      <StyledInputFieldTItle>타이틀</StyledInputFieldTItle>
      <Input placeholder="입력해주세요" />
    </StyledInputField>
  );
};

export default ProfileInputField;
