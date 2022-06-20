import React, { useState } from 'react';
import { HeartFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { postLikeStudy, deleteLikeStudy } from '../../../lib/apis/likeStudy';
import styled from 'styled-components';

const IsLikeContainer = styled.div`
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

const LikeIcon = ({ studyId }) => {
  const [isLike, setIsLike] = useState();

  const submitPostLikeStudy = async event => {
    event.preventDefault();

    const submitPostLikeStudy = {
      likeStatus: true,
      studyId: studyId,
    };
    console.log(submitPostLikeStudy, studyId);

    const res = await postLikeStudy(submitPostLikeStudy, studyId);
    if (res.status === 201) {
      const id = res.data.id;
      const likeStatus = res.data.likeStatus;
      setIsLike(likeStatus);
      return likeStatus;
    }
  };

  const submitDeleteLikeStudy = async event => {
    event.preventDefault();

    const submitDeleteLikeStudy = {
      // id: id,
      likeStatus: true,
      studyId: studyId,
    };

    console.log(submitDeleteLikeStudy);

    const res = await deleteLikeStudy(submitDeleteLikeStudy);
    if (res.status === 201) {
      return;
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <IsLikeContainer>
      {isLike === true ? (
        <button onChange={submitDeleteLikeStudy}>
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
