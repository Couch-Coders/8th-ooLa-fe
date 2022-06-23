import React, { useState } from 'react';
import CommentMemberProfile from '../commentMemberProfile/CommentMemberProfile.component';
import { Button, Input } from 'antd';
import {
  CommentInputFieldContainer,
  InputField,
} from './CommentInputField.style';
import UseInput from '../../../hooks/useInput';
import { useParams } from 'react-router-dom';
import { postComments } from '../../../lib/apis/comments';

const isNotEmpty = value => value.trim() !== '';

const CommentInputField = ({ memberData, memberUid }) => {
  const { TextArea } = Input;
  const { studyId } = useParams();
  // const [comment, setComment] = useState();

  const {
    value: contentValue,
    isValid: contentIsValid,
    hasError: contentHasError,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: resetContentInput,
  } = UseInput(isNotEmpty);

  let formIsValid = false;

  if (contentIsValid) {
    formIsValid = true;
  }
  const submitHandler = async event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    const submitComment = {
      content: contentValue,
      // insertDate: new Date()
      //   .toISOString()
      //   .replace('T', ' ')
      //   .replace(/\..*/, ''),
      // studyId: studyId,
      // uid: memberUid,
      // 댓글 수정 commentId
      // commentId: commentId,
    };

    const res = await postComments(submitComment, studyId);
    if (res.status === 201) {
      const comments = res.data;
      return;
    }

    resetContentInput();
  };

  const commentClasses = contentHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <CommentInputFieldContainer onSubmit={submitHandler}>
      <CommentMemberProfile memberData={memberData} />
      <InputField className={commentClasses}>
        <TextArea
          size="large"
          rows={4}
          placeholder="댓글을 입력해주세요"
          minLength={2}
          onChange={contentChangeHandler}
          onBlur={contentBlurHandler}
          value={contentValue}
        />
        {contentHasError && <p>댓글을 입력해주세요</p>}
      </InputField>
      <Button
        type="submit"
        style={{ width: 120, height: 38 }}
        onClick={submitHandler}
      >
        완료
      </Button>
    </CommentInputFieldContainer>
  );
};

export default CommentInputField;
