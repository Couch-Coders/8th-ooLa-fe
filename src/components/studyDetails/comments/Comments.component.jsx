import React from 'react';
import { CommentsContainer, CommentsContent } from './Comments.style';
import CommentInputField from '../commentInputField/CommentInputField.component';
import CommentList from '../commentList/CommentList.component';

const Comments = () => {
  return (
    <CommentsContainer>
      <CommentsContent>
        <h4>문의사항</h4>
        <CommentInputField />
        <CommentList />
      </CommentsContent>
    </CommentsContainer>
  );
};

export default Comments;
