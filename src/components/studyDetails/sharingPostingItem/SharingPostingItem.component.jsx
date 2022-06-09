import React from 'react';

import MemberProfile from '../memberProfile/MemberProfile.component';

const SharingPostingItem = () => {
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
