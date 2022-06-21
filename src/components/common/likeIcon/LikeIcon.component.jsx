import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';

const LikeIcon = ({ isLike }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLike ? (
        <HeartFilled style={{ fontSize: '2rem', color: '#f56a00' }} />
      ) : (
        <HeartFilled style={{ fontSize: '2rem', color: '#999999' }} />
      )}
    </>
  );
};

LikeIcon.propTypes = {
  isLike: PropTypes.bool,
};

export default LikeIcon;
