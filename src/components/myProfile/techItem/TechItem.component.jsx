import React from 'react';

import { IconWrapper, IconContainer, ItemContainer } from './TechItem.style';

const TechItem = ({ name }) => {
  return (
    <ItemContainer>
      <IconContainer>
        <IconWrapper>{name}</IconWrapper>
      </IconContainer>
    </ItemContainer>
  );
};
export default TechItem;
