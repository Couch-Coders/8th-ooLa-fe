import React from 'react';
import { Input } from 'antd';

const SharingLinkInputField = () => {
  return (
    <form>
      <div>
        <span>한줄 코멘트</span>
        <Input />
      </div>
      <div>
        <span>url 주소</span>
        <Input />
      </div>
      <button>제출</button>
    </form>
  );
};
export default SharingLinkInputField;
