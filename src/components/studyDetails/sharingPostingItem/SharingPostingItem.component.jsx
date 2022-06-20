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
  return (
    <StyledItemContainer>
      <SharingLinkProfile
        nickname={content.member.nickName}
        photoUrl={content.member.photoUrl}
      />
      <ContentWrapper>
        <div>
          {/* <StyledDate>{content.createDate}</StyledDate> */}
          <StyledContent>{content.comment}</StyledContent>
        </div>
      </ContentWrapper>
      <StyledLink target="_blank" href={content.shareLink} rel="noreferrer">
        <SwapRightOutlined />
      </StyledLink>
    </StyledItemContainer>
  );
};

export default SharingPostingItem;
