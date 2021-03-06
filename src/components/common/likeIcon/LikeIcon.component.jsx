import React, { useState } from 'react';
import { HeartFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { postLikeStudy, deleteLikeStudy } from '../../../lib/apis/likeStudy';
import styled from 'styled-components';
import { useEffect } from 'react';
import { auth } from '../../../service/firebase';

const IsLikeContainer = styled.div`
  position: relative;
  z-index: 30;
  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const LikeIcon = ({ studyId, studyLikes, likeCount, setLikeCount }) => {
  const [like, setLike] = useState(false);
  const [likeId, setLikeId] = useState('');

  const isMember = studyLike => {
    const uid = auth.currentUser?.uid;
    return studyLike.member.uid === uid;
  };

  useEffect(() => {
    const isLike = studyLikes.some(isMember);
    setLike(isLike);
  }, [studyLikes]);

  const submitPostLikeStudy = async event => {
    event.preventDefault();
    const submitPostLikeStudy = {
      likeStatus: true,
      studyId: studyId,
    };

    const res = await postLikeStudy(submitPostLikeStudy, studyId);
    if (res.status === 201) {
      setLike(true);
      setLikeId(res.data.id);
      setLikeCount(likeCount + 1);
    }
  };

  const submitDeleteLikeStudy = async event => {
    event.preventDefault();
    const member = studyLikes.find(isMember);
    const submitDeleteLikeStudy = {
      id: member?.id || likeId,
      likeStatus: true,
      studyId: studyId,
    };
    const res = await deleteLikeStudy(submitDeleteLikeStudy, studyId);
    if (res.status === 200) {
      setLike(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment

    <IsLikeContainer>
      {like === true ? (
        <button onClick={submitDeleteLikeStudy}>
          <HeartFilled style={{ fontSize: '2.2rem', color: '#f56a00' }} />
        </button>
      ) : (
        <button onClick={submitPostLikeStudy}>
          <HeartFilled style={{ fontSize: '2.2rem', color: '#999999' }} />
        </button>
      )}
    </IsLikeContainer>
  );
};

LikeIcon.propTypes = {
  isLike: PropTypes.bool,
};

export default LikeIcon;
