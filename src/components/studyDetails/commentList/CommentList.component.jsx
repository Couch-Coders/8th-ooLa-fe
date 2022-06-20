import React, { useState, useEffect } from 'react';
import CommentItem from '../commentItem/CommentItem.component';
import { CommentListContainer, NoComment } from './CommentList.style';
// import { getComments } from '../../../lib/apis/comments';

const CommentList = () => {
  const [comments, setComments] = useState([]);

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
          {comments.map(comment => (
            <CommentItem comment={comment} key={comment.commentId} />
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
