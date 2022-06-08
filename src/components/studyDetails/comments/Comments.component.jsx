import React from 'react';
import { CommentsContainer, CommentsContent } from './Comments.style';

import CommentInputField from '../commentInputField/CommentInputField.component';
import CommentList from '../commentList/CommentList.component';

const Comments = () => {
  return (
    <CommentsContainer>
      <h3>문의사항</h3>
      <CommentsContent>
        <CommentInputField />
        <CommentList />
      </CommentsContent>
    </CommentsContainer>
  );
};

export default Comments;
