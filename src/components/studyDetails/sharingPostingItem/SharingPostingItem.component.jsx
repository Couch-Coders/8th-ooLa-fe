import React from 'react';
import {
  StyledItemContainer,
  ContentWrapper,
  StyledLink,
  StyledDate,
  StyledContent,
} from './SharingPostingItem.style';
import SharingLinkProfile from '../sharingLinkProfile/SharingLinkProfile.component';
import { SwapRightOutlined } from '@ant-design/icons';

const SharingPostingItem = ({ content }) => {
  console.log(content);
  return (
    <StyledItemContainer>
      <SharingLinkProfile
        nickname={content.nickName}
        photoUrl={content.photoURL}
      />
      <ContentWrapper>
        <div>
          <StyledDate>{content.createDate}</StyledDate>
          <StyledContent>{content.content}</StyledContent>
        </div>
        <StyledLink target="_blank" href={content.linkURL} rel="noreferrer">
          <SwapRightOutlined />
        </StyledLink>
      </ContentWrapper>
    </StyledItemContainer>
  );
};

export default SharingPostingItem;
