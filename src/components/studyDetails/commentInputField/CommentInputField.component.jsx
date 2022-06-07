import React from 'react';
import CommentMemberProfile from '../commentMemberProfile/CommentMemberProfile.component';
import { Button, Input } from 'antd';
import {
  CommentInputFieldContainer,
  InputField,
} from './CommentInputField.style';

const CommentInputField = () => {
  const { TextArea } = Input;
  return (
    <CommentInputFieldContainer>
      <CommentMemberProfile />
      <InputField>
        <TextArea rows={5} placeholder="댓글을 입력해주세요" minLength={1} />
      </InputField>
      <Button type="submit" style={{ width: 120, height: 40 }}>
        완료
      </Button>
    </CommentInputFieldContainer>
  );
};

export default CommentInputField;
