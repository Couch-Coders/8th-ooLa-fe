import React from 'react';
import SharingLinkInputField from '../sharingLinkInputField/SharingLinkInputField.component';
import SharingPostingItem from '../sharingPostingItem/SharingPostingItem.component';

const SharingLink = () => {
  return (
    <section>
      <div>
        <SharingLinkInputField />
      </div>
      <ul>
        <SharingPostingItem />
      </ul>
    </section>
  );
};
export default SharingLink;
