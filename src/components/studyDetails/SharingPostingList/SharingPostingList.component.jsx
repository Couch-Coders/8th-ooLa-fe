import SharingPostingItem from '../sharingPostingItem/SharingPostingItem.component';

import { StyledListContainer } from './sharingPostingList.style';

const SharingLinkList = ({ posts }) => {
  return (
    <StyledListContainer>
      {posts.map(post => (
        <SharingPostingItem key={post.studyBlogId} content={post} />
      ))}
    </StyledListContainer>
  );
};

export default SharingLinkList;
