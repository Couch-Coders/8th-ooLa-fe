import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  SharingLinkInputFieldContainer,
  InputField,
  InputFieldWrapper,
  StyledInput,
  StyledButton,
} from './SharingLinkInputField.style';
import { postSharingComment } from '../../../lib/apis/main';

const SharingLinkInputField = ({ setIsPostComment }) => {
  const { studyId } = useParams();
  const commentRef = useRef();
  const linkRef = useRef();

  const submitHadnler = async event => {
    event.preventDefault();
    const enteredComment = commentRef.current.value;
    const enteredLink = linkRef.current.value;
    const sharingComment = {
      comment: enteredComment,
      shareLink: enteredLink,
    };
    const response = await postSharingComment(studyId, sharingComment);
    if (response.status === 201) {
      setIsPostComment(true);
      commentRef.current.value = '';
      linkRef.current.value = '';
    }
  };

  return (
    <form onSubmit={submitHadnler}>
      <SharingLinkInputFieldContainer>
        <InputFieldWrapper>
          <InputField>
            <label>한줄 코멘트</label>
            <StyledInput size="large" ref={commentRef} />
          </InputField>
          <InputField>
            <label>url 주소</label>
            <StyledInput size="large" ref={linkRef} />
          </InputField>
        </InputFieldWrapper>
        <StyledButton>보내기</StyledButton>
      </SharingLinkInputFieldContainer>
    </form>
  );
};
export default SharingLinkInputField;
