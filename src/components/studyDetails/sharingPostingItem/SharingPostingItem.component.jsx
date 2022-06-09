import React from 'react';
import useParams from 'react-router-dom';
import { auth } from '../../../service/firebase';

import MemberProfile from '../memberProfile/MemberProfile.component';

const DUMMY_DATA = [
  {
    imageURL: 'https://source.unsplash.com/random',
    nickName: '트릴로니',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    uid: '1',
  },
  {
    imageURL: 'https://source.unsplash.com/random',
    nickName: '한자와',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    uid: '1',
  },
  {
    imageURL: 'https://source.unsplash.com/random',
    nickName: '나오키',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    uid: '1',
  },
  {
    imageURL: 'https://source.unsplash.com/random',
    nickName: '트릴로니',
    createDate: '2022-06-09',
    content: '오늘은 리액트란 무엇인지 알아봅시다',
    uid: '1',
  },
];

const SharingPostingItem = () => {
  const currentUser = auth?.currentUser.uid;
  console.log(currentUser);

  return (
    <div>
      <MemberProfile />
      <div>
        <span>2022.05.13</span>
        <p>
          오늘은 React란 무엇인지, 정의와 특징에 대해 간단히 정리하려고 합니다.
          <br />웹 페이지를 개발하면서 이용했었는데, 정확하게 무엇인지, 특징과
          장점이 무엇인지 잘 모르고 사용해왔던 것 같아 정리해보았습니다.
        </p>
        <button>이동</button>
      </div>
    </div>
  );
};

export default SharingPostingItem;
