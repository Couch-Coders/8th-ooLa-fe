import React from 'react';
import SharingLinkInputField from '../sharingLinkInputField/SharingLinkInputField.component';
import {
  SharingLinkContainer,
  SharingListContainer,
} from './SharingLink.style';
import SharingLinkList from '../SharingPostingList/SharingPostingList.component';
const SharingLink = () => {
  return (
    <SharingLinkContainer>
      <div>
        <SharingLinkInputField />
      </div>
      <SharingListContainer>
        <SharingLinkList />
      </SharingListContainer>
    </SharingLinkContainer>
  );
};
export default SharingLink;
