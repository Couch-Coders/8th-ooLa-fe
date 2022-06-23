import React from 'react';
import CommentItem from '../commentItem/CommentItem.component';
import { CommentListContainer, NoComment } from './CommentList.style';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 ? (
        <CommentListContainer>
          {comments.map(comment => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
        </CommentListContainer>
      ) : (
        <NoComment>
          <h4>댓글이 없습니다</h4>
        </NoComment>
      )}
    </div>
  );
};

export default CommentList;
