import React from 'react';
import SharingLinkInputField from '../sharingLinkInputField/SharingLinkInputField.component';
import SharingPostingItem from '../sharingPostingItem/SharingPostingItem.component';
import { SharingLinkContainer } from './SharingLink.style';

const SharingLink = () => {
  return (
    <SharingLinkContainer>
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
