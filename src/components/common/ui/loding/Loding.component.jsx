import React from 'react';
import { LodingContainer } from './Loding.style';
import lodingSpinner from '../../../../asset/lodingSpinner/lodingSpinner.svg';

const Loding = () => {
  return (
    <LodingContainer>
      <img src={lodingSpinner} alt="Loding..." width="10%" />
    </LodingContainer>
  );
};

export default Loding;
