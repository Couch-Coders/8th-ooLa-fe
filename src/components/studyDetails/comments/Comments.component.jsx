import React, { useEffect, useContext, useState } from 'react';
import { ProfileContext } from '../../../context/Profile.context';

import { CommentsContainer, CommentsContent } from './Comments.style';

import CommentInputField from '../commentInputField/CommentInputField.component';
import CommentList from '../commentList/CommentList.component';
import { fetchMyProfile } from '../../../lib/apis/auth';
import { getStudyMembers } from '../../../lib/apis/main';

const Comments = () => {
  const { fetchUserProfile } = useContext(ProfileContext);
  const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMyProfile().then(res => {
      const memberData = res.data;
      const profileObj = {
        nickname: memberData.nickName,
        role: memberData.role,
      };
      const memberUid = memberData.uid;
      setUid(memberUid);
      fetchUserProfile(profileObj);
    });

    setIsLoading(false);
  }, []);

  return (
    <CommentsContainer>
      <h3>댓글</h3>
      <CommentsContent>
        <CommentInputField memberUid={uid} />
        <CommentList memberUid={uid} />
      </CommentsContent>
    </CommentsContainer>
  );
};

export default Comments;
