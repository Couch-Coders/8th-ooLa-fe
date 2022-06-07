import React from 'react';
import { Input } from 'antd';
import { SharingLinkInputFieldContainer } from './SharingLinkInputField.style';

const SharingLinkInputField = () => {
  return (
    <form>
      <SharingLinkInputFieldContainer>
        <div>
          <h4>한줄 코멘트</h4>
          <Input size="large" />
        </div>
        <div>
          <h4>url 주소</h4>
          <Input size="large" />
        </div>
        <button>제출</button>
      </SharingLinkInputFieldContainer>
    </form>
  );
};
export default SharingLinkInputField;
