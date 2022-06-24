import React, { useEffect, useState } from 'react';
import { CommentsContainer, CommentsContent } from './Comments.style';
import CommentInputField from '../commentInputField/CommentInputField.component';
import CommentList from '../commentList/CommentList.component';
import { fetchMyProfile } from '../../../lib/apis/auth';
import { getComments } from '../../../lib/apis/comments';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const [profile, setProfile] = useState({});
  const [isComment, setIsComment] = useState(true);
  const [comments, setComments] = useState([]);
  const [leader, setLeader] = useState([]);
  const { studyId } = useParams();

  useEffect(() => {
    if (isComment) {
      const getAllCommentsList = async () => {
        const response = await getComments(studyId);
        const content = response.data.comments.reverse();
        const writer = response.data.studyCommentMemberResponseDtos.find(
          member => member.role === 'leader',
        );
        setLeader(writer);
        setComments(content);
        setIsComment(false);
      };
      getAllCommentsList();
    }
  }, [isComment, studyId]);

  useEffect(() => {
    fetchMyProfile().then(res => {
      const memberData = res.data;
      const profileObj = {
        nickname: memberData.nickName,
        uid: memberData.uid,
      };
      setProfile(profileObj);
    });
  }, []);

  return (
    <CommentsContainer>
      <h3>댓글</h3>
      <CommentsContent>
        <CommentInputField
          setIsComment={setIsComment}
          comments={comments}
          profile={profile}
        />
        <CommentList
          comments={comments}
          leader={leader}
          setIsComment={setIsComment}
        />
      </CommentsContent>
    </CommentsContainer>
  );
};

export default Comments;
