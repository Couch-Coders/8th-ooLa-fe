import React, { useContext, useState } from 'react';
import { Avatar } from 'antd';
import { ProfileContainer, Nickname } from './CommentMemberProfile.style';
import LeaderTag from '../leaderTag/LeaderTag.component';
import { ProfileContext } from '../../../context/Profile.context';
import { AuthContext } from '../../../context/Auth.context';
import { auth } from '../../../service/firebase';
import { getStudyMembers } from '../../../lib/apis/main';

import PropTypes from 'prop-types';

const CommentMemberProfile = () => {
  const [role, setRole] = useState(true);

  const AuthCtx = useContext(AuthContext);
  const photoURL = auth.currentUser?.photoURL;
  const profileCtx = useContext(ProfileContext);
  const { nickname } = profileCtx;

  // console.log(nickname);

  return (
    <ProfileContainer>
      <Avatar size={45} src={photoURL} />
      <Nickname value={nickname} />
      {role === 'leader' ? <LeaderTag /> : null}
    </ProfileContainer>
  );
};

CommentMemberProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default CommentMemberProfile;
