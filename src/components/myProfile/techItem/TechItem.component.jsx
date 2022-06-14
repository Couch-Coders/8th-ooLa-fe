import React, { useContext, useState, useEffect } from 'react';
import { ProfileContext } from '../../../context/Profile.context';

import {
  IconWrapper,
  IconContainer,
  ItemContainer,
  TechName,
} from './TechItem.style';
import PropTypes from 'prop-types';

const TechItem = ({ name, icon }) => {
  const [isClicked, setIsClicked] = useState(false);
  const profileCtx = useContext(ProfileContext);
  const { updateItemtoTechStack, techStack } = profileCtx;
  const isStackEmpty = !techStack.length;

  const onClickHandler = () => {
    updateItemtoTechStack(name);
    setIsClicked(state => !state);
  };

  useEffect(() => {
    setIsClicked(techStack.includes(name));
  }, [techStack]);

  return (
    <ItemContainer onClick={onClickHandler}>
      <IconContainer isClicked={isClicked} isEmpty={isStackEmpty}>
        <IconWrapper>{icon}</IconWrapper>
      </IconContainer>
      <TechName>{name}</TechName>
    </ItemContainer>
  );
};

TechItem.propTypes = {
  name: PropTypes.string,
};

export default TechItem;
