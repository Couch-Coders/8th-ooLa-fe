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
    const content = response.data;
    setComments(content);
    console.log(content);
    return content;
  }
  useEffect(() => {
    const response = async () => await getComments(studyId);
    response();
    comment();
  }, []);

  console.log(comments.comments);
  return (
    <div>
      {/* {? (
        <CommentListContainer>
          {comments.map(item => (
            <CommentItem item={item} key={item.commentId} />
          ))}
        </CommentListContainer>
      ) : (
        <NoComment>
          <h4>댓글이 없습니다</h4>
        </NoComment>
      )} */}
      <NoComment>
        <h4>댓글이 없습니다</h4>
      </NoComment>
    </div>
  );
};

export default CommentList;
