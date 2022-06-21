import React, { useContext, useState } from 'react';
import { Avatar } from 'antd';
import { ProfileContainer, Nickname } from './CommentMemberProfile.style';
import LeaderTag from '../leaderTag/LeaderTag.component';
import { ProfileContext } from '../../../context/Profile.context';
import { auth } from '../../../service/firebase';
import { StudyDetailsContext } from '../../../context/studyDetails.context';

import PropTypes from 'prop-types';

const CommentMemberProfile = () => {
  const { currentRole } = useContext(StudyDetailsContext);

  // const [role, setRole] = useState(true);

  const photoURL = auth.currentUser?.photoURL;
  const profileCtx = useContext(ProfileContext);
  const { nickname } = profileCtx;
  // const role = memberData.role;
  // console.log(memberData.role);

  return (
    <ProfileContainer>
      <Avatar size={45} src={photoURL} />
      <Nickname>{nickname}</Nickname>
      {currentRole === 'leader' ? <LeaderTag /> : null}
    </ProfileContainer>
  );
};

CommentMemberProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default CommentMemberProfile;
