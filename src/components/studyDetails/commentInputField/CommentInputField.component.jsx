import React, { useContext, useState } from 'react';
import { Button, Input, Avatar } from 'antd';
import {
  CommentInputFieldContainer,
  InputField,
  ProfileContainer,
  Nickname,
} from './CommentInputField.style';
import UseInput from '../../../hooks/useInput';
import { useParams } from 'react-router-dom';
import { postComments } from '../../../lib/apis/comments';
import LeaderTag from '../leaderTag/LeaderTag.component';
import { ProfileContext } from '../../../context/Profile.context';
import { auth } from '../../../service/firebase';
import { StudyDetailsContext } from '../../../context/studyDetails.context';

const isNotEmpty = value => value.trim() !== '';

const CommentInputField = ({ profile, comments }) => {
  const { TextArea } = Input;
  const { studyId } = useParams();
  const { currentRole } = useContext(StudyDetailsContext);
  const photoURL = auth.currentUser?.photoURL;

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

      // 댓글 수정 commentId
      // createdDate: new Date()
      //   .toISOString()
      //   .replace('T', ' ')
      //   .replace(/\..*/, ''),
      // studyId: studyId,
      // uid: profile.uid,
      // commentId: comments.id,
    };

    const res = await postComments(submitComment, studyId);
    if (res.status === 201) {
      return;
    }

    resetContentInput();
    console.log(submitComment);
  };

  const commentClasses = contentHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <CommentInputFieldContainer onSubmit={submitHandler}>
      <ProfileContainer>
        <Avatar size={45} src={photoURL} />
        <Nickname>{profile.nickname}</Nickname>
        {currentRole === 'leader' ? <LeaderTag /> : null}
      </ProfileContainer>
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
