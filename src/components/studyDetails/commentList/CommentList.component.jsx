import React from 'react';
import QuestionCommentItem from '../questionCommentItem/QuestionCommentItem.component';
import AnswerCommentItem from '../answerCommentItem/AnswerCommentItem.component';
import { CommentListContainer } from './CommentList.style';

const CommentList = () => {
  return (
    <CommentListContainer>
      <QuestionCommentItem />
      <AnswerCommentItem />
    </CommentListContainer>
  );
};

export default CommentList;
