import React from 'react';
import { style } from './LikeIcon.style';
import { HeartFilled } from '@ant-design/icons';

const likeIcon = () => {
  return (
    <LikeIconContainer>
      <HeartFilled />
    </LikeIconContainer>
  );
};

export default likeIcon;

const { LikeIconContainer } = style;
