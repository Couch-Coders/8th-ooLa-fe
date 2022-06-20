import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SharingLinkInputField from '../sharingLinkInputField/SharingLinkInputField.component';
import {
  SharingLinkContainer,
  SharingListContainer,
} from './SharingLink.style';
import SharingLinkList from '../SharingPostingList/SharingPostingList.component';

import { getSharingComment } from '../../../lib/apis/main';

const SharingLink = () => {
  const [isPostComment, setIsPostComment] = useState(true);
  const [posts, setPosts] = useState([]);
  const { studyId } = useParams();
  useEffect(() => {
    if (isPostComment) {
      const getAllSharingList = async () => {
        const response = await getSharingComment(studyId);
        const data = response.data.studyBlogs;
        setPosts(data);
        setIsPostComment(false);
      };
      getAllSharingList();
    }
  }, [isPostComment, studyId]);
  return (
    <SharingLinkContainer>
      <div>
        <SharingLinkInputField setIsPostComment={setIsPostComment} />
      </div>
      <SharingListContainer>
        {posts.length > 0 ? <SharingLinkList posts={posts} /> : null}
      </SharingListContainer>
    </SharingLinkContainer>
  );
};
export default SharingLink;
