import React, { useState } from 'react';
import CommentMemberProfile from '../commentMemberProfile/CommentMemberProfile.component';
import { SwapRightOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {
  CommentItemContainer,
  CommentItemTop,
  CommentItemBottom,
  Left,
  Right,
  EditBtn,
} from './CommentItem.style';

import PropTypes from 'prop-types';

const CommentItem = ({ item }) => {
  const { content, createdDate } = item;
  const [moreBtn, setMoreBtn] = useState(true);

  return (
    <CommentItemContainer>
      <CommentItemTop>
        <Left>
          <CommentMemberProfile />
          <p>
            {createdDate.substring(0, 10).replace('-', '.').replace('-', '.')}
          </p>
        </Left>

        <Right>
          {moreBtn ? (
            <EllipsisOutlined
              onClick={() => setMoreBtn(false)}
              style={{ fontSize: '30px', color: '#999', marginRight: '20px' }}
            />
          ) : (
            <EditBtn>
              <button>수정</button>
              <button>삭제</button>
              <button onClick={() => setMoreBtn(true)}>
                <SwapRightOutlined
                  style={{ fontSize: '18px', color: '#666' }}
                />
              </button>
            </EditBtn>
          )}
        </Right>
      </CommentItemTop>
      <CommentItemBottom>
        <p className="CommentsContent">{content}</p>
      </CommentItemBottom>
    </CommentItemContainer>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    insertDate: PropTypes.string,
    comment: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default CommentItem;
