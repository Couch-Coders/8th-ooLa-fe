import SharingPostingItem from '../sharingPostingItem/SharingPostingItem.component';

import { StyledListContainer } from './sharingPostingList.style';

const DUMMY_DATA = [
  {
    photoURL: 'https://source.unsplash.com/random',
    nickName: '트릴로니',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    linkURL: 'https://g.co/kgs/B72nJp',
    uid: '1',
  },
  {
    photoURL: 'https://source.unsplash.com/random',
    nickName: '한자와',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    linkURL: 'https://g.co/kgs/B72nJp',
    uid: '2',
  },
  {
    photoURL: 'https://source.unsplash.com/random',
    nickName: '나오키',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    linkURL: 'https://g.co/kgs/B72nJp',
    uid: '3',
  },
  {
    photoURL: 'https://source.unsplash.com/random',
    nickName: '트릴로니',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    linkURL: 'https://g.co/kgs/B72nJp',
    uid: '4',
  },
];

const SharingLinkList = () => {
  return (
    <StyledListContainer>
      {DUMMY_DATA.map(post => (
        <SharingPostingItem key={post.uid} content={post} />
      ))}
    </StyledListContainer>
  );
};

export default SharingLinkList;
