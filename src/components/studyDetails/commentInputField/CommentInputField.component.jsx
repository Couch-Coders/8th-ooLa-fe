import React from 'react';
import CommentMemberProfile from '../commentMemberProfile/CommentMemberProfile.component';
import { Button, Input } from 'antd';
import {
  CommentInputFieldContainer,
  InputField,
} from './CommentInputField.style';
import UseStudyInput from '../../../hooks/useStudyInput';

const isNotEmpty = value => value.trim() !== '';

const CommentInputField = () => {
  const { TextArea } = Input;

  const {
    value: contentValue,
    isValid: contentIsValid,
    hasError: contentHasError,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: resetContentInput,
  } = UseStudyInput(isNotEmpty);

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
      parentNo: 'parentNo',
      insertDate: new Date()
        .toISOString()
        .replace('T', ' ')
        .replace(/\..*/, ''),
      // studyId: studyId,
      // commentId: commentId,
    };

    console.log(submitComment);

    resetContentInput();
  };

  // const res = await postComments(submitComments, studyId, commentId);
  // if (res.status === 201) {
  //   const commentId = res.data.commentId;
  //   const studyId = res.data.studyId;
  //   return();
  // }

  const commentClasses = contentHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <CommentInputFieldContainer onSubmit={submitHandler}>
      <CommentMemberProfile />
      <InputField className={commentClasses}>
        <TextArea
          size="large"
          rows={4}
          placeholder="댓글을 입력해주세요"
          minLength={2}
          onChange={contentChangeHandler}
          onBlur={contentBlurHandler}
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
