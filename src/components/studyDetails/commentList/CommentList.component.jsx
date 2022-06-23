import React, { useState, useEffect } from 'react';
import CommentItem from '../commentItem/CommentItem.component';
import { CommentListContainer, NoComment } from './CommentList.style';
import { getComments } from '../../../lib/apis/comments';
import { useParams } from 'react-router-dom';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { studyId } = useParams();

  async function comment() {
    const response = await getComments(studyId);
    const content = response.data.comments;
    setComments(content);

    return content;
  }
  useEffect(() => {
    const response = async () => await getComments(studyId);
    response();
    comment();
  }, []);

  console.log(comments);
  return (
    <div>
      {comments.length > 0 ? (
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
      {/* <NoComment>
        <h4>댓글이 없습니다</h4>
      </NoComment> */}
    </div>
  );
};

export default CommentList;
