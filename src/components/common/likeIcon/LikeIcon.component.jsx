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

const LikeIcon = ({ studyId, studyLikes }) => {
  const [like, setLike] = useState(false);
  const [likeId, setLikeId] = useState();

  const isMember = studyLike => {
    const uid = auth.currentUser?.uid;
    if (studyLike.member.uid === uid) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setLikeId(studyLikes[0]?.id);
    const isLike = studyLikes.some(isMember);
    setLike(isLike);
  }, [studyLikes]);

  const submitPostLikeStudy = async event => {
    event.preventDefault();
    const submitPostLikeStudy = {
      likeStatus: true,
      studyId: studyId,
    };
    console.log(submitPostLikeStudy, studyId);

    const res = await postLikeStudy(submitPostLikeStudy, studyId);
    if (res.status === 201) {
      setLike(true);
      setLikeId(res.data.id);
    }
  };

  const submitDeleteLikeStudy = async event => {
    event.preventDefault();
    const submitDeleteLikeStudy = {
      id: likeId,
      likeStatus: true,
      studyId: studyId,
    };

    const res = await deleteLikeStudy(submitDeleteLikeStudy, studyId);
    console.log(res);
    if (res.status === 200) {
      setLike(false);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment

    <IsLikeContainer>
      {like === true ? (
        <button onClick={submitDeleteLikeStudy}>
          <HeartFilled style={{ fontSize: '2.2rem', color: '#dc143c' }} />
        </button>
      ) : (
        <button onClick={submitPostLikeStudy}>
          <HeartFilled style={{ fontSize: '2.2rem', color: '#787878' }} />
        </button>
      )}
    </IsLikeContainer>
  );
};

LikeIcon.propTypes = {
  isLike: PropTypes.bool,
};

export default LikeIcon;
