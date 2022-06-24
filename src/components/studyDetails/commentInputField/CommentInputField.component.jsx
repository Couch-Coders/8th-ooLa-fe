import React, { useContext, useState, useRef } from 'react';
import { Button, Avatar } from 'antd';
import {
  CommentInputFieldContainer,
  InputField,
  ProfileContainer,
  Nickname,
  StyledButton,
} from './CommentInputField.style';
import { useParams } from 'react-router-dom';
import { postComments } from '../../../lib/apis/comments';
import LeaderTag from '../leaderTag/LeaderTag.component';
import { auth } from '../../../service/firebase';
import { StudyDetailsContext } from '../../../context/studyDetails.context';

const CommentInputField = ({ profile, setIsComment }) => {
  const { studyId } = useParams();
  const { currentRole } = useContext(StudyDetailsContext);
  const photoURL = auth.currentUser?.photoURL;
  const commentRef = useRef();

  const submitHandler = async event => {
    event.preventDefault();
    const enteredComment = commentRef.current.value;

    const submitComment = {
      content: enteredComment,
    };

    const response = await postComments(submitComment, studyId);
    if (response.status === 201) {
      setIsComment(true);
      commentRef.current.value = '';
    }
  };

  return (
    <CommentInputFieldContainer onSubmit={submitHandler}>
      <ProfileContainer>
        <Avatar size={45} src={photoURL} />
        <Nickname>{profile.nickname}</Nickname>
        {currentRole === 'leader' ? <LeaderTag /> : null}
      </ProfileContainer>
      <InputField>
        <textarea
          size="large"
          rows={4}
          placeholder="댓글을 입력해주세요"
          ref={commentRef}
        />
      </InputField>
      <StyledButton
        type="submit"
        style={{ width: 120, height: 38 }}
        onClick={submitHandler}
      >
        완료
      </StyledButton>
    </CommentInputFieldContainer>
  );
};

export default CommentInputField;
