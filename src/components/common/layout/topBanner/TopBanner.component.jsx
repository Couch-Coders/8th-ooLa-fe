import React from 'react';
import { TopBannerContainer, TopBannerText } from './TopBanner.style';

const TopBanner = ({ title, info }) => {
  return (
    <TopBannerContainer>
      <TopBannerText>
        <h2>{title}</h2>
        <h4>{info}</h4>
      </TopBannerText>
    </TopBannerContainer>
  );
};

export default TopBanner;
