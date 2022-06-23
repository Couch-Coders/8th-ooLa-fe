import React, { useEffect, useContext, useState } from 'react';
import { ProfileContext } from '../../../context/Profile.context';
import { CommentsContainer, CommentsContent } from './Comments.style';
import CommentInputField from '../commentInputField/CommentInputField.component';
import CommentList from '../commentList/CommentList.component';
import { fetchMyProfile } from '../../../lib/apis/auth';
import { getComments } from '../../../lib/apis/comments';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    fetchMyProfile().then(res => {
      const memberData = res.data;
      const profileObj = {
        nickname: memberData.nickName,
        uid: memberData.uid,
      };
      setProfile(profileObj);
    });

    setIsLoading(false);
  }, []);

  return (
    <CommentsContainer>
      <h3>댓글</h3>
      <CommentsContent>
        <CommentInputField comments={comments} profile={profile} />
        <CommentList comments={comments} />
      </CommentsContent>
    </CommentsContainer>
  );
};

export default Comments;
