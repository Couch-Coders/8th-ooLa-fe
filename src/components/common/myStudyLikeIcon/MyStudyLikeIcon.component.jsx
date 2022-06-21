import React, { useState } from 'react';
import { HeartFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect } from 'react';

const IsLikeContainer = styled.div`
  position: relative;
  z-index: 30;
  button {
    background: none;
    outline: none;
    border: none;
  }
`;

const MyStudyLikeIcon = ({ likeStatus }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    setLike(likeStatus);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <IsLikeContainer>
      {like === true ? (
        <HeartFilled style={{ fontSize: '2.2rem', color: '#dc143c' }} />
      ) : (
        <HeartFilled style={{ fontSize: '2.2rem', color: '#787878' }} />
      )}
    </IsLikeContainer>
  );
};

MyStudyLikeIcon.propTypes = {
  isLike: PropTypes.bool,
};

export default MyStudyLikeIcon;
