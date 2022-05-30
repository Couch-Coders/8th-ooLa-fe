import React, { useContext, useState } from 'react';
import { ProfileContext } from '../../../context/Profile.context';

import { IconWrapper, IconContainer, ItemContainer } from './TechItem.style';
import PropTypes from 'prop-types';

const TechItem = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const profileCtx = useContext(ProfileContext);
  const { updateItemtoTechStack, techStack } = profileCtx;
  const isStackEmpty = !techStack.length;

  const onClickHandler = () => {
    updateItemtoTechStack(name);
    setIsClicked(state => !state);
  };

  return (
    <ItemContainer onClick={onClickHandler}>
      <IconContainer isClicked={isClicked} isEmpty={isStackEmpty}>
        <IconWrapper>{name}</IconWrapper>
      </IconContainer>
    </ItemContainer>
  );
};

TechItem.propTypes = {
  name: PropTypes.string,
};

export default TechItem;
