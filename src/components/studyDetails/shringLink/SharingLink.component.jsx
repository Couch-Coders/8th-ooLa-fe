import React from 'react';
import SharingLinkInputField from '../sharingLinkInputField/SharingLinkInputField.component';
import SharingPostingItem from '../sharingPostingItem/SharingPostingItem.component';
import { SharingLinkContainer } from './SharingLink.style';

const SharingLink = () => {
  return (
    <SharingLinkContainer>
      <h3>공유로그</h3>
      <div>
        <SharingLinkInputField />
      </div>
      <ul>
        <SharingPostingItem />
      </ul>
    </SharingLinkContainer>
  );
};
export default SharingLink;
