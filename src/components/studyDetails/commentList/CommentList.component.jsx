import React, { useState, useEffect } from 'react';
import QuestionCommentItem from '../questionCommentItem/QuestionCommentItem.component';
import AnswerCommentItem from '../answerCommentItem/AnswerCommentItem.component';
import { CommentListContainer } from './CommentList.style';
// import { getComments } from '../../../lib/apis/comments';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  const qusComments = comments.filter(comment => comment.parentNo === 'parent');

  const ansComments = comments.filter(
    comment => comment.parentNo === 'parentNo',
  );

  // async function comment() {
  //   const response = await getComments();
  //   const content = response.data;
  //   setComments(content);
  //   console.log(content);
  //   return content;
  // }
  // useEffect(() => {
  //   const response = async () => await getComments();
  //   response();
  //   comment();
  // }, []);
  return (
    <div>
      {!!comments.length ? (
        <CommentListContainer>
          {qusComments.map(comment => (
            <QuestionCommentItem comment={comment} key={comment.commentId} />
          ))}
          {ansComments.map(comment => (
            <AnswerCommentItem comment={comment} key={comment.commentId} />
          ))}
        </CommentListContainer>
      ) : (
        <h4>댓글이 없습니다</h4>
      )}
    </div>
  );
};

export default CommentList;
