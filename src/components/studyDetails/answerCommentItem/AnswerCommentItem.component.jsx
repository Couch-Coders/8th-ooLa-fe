import React, { useState } from 'react';
import CommentMemberProfile from '../commentMemberProfile/CommentMemberProfile.component';
import { SwapRightOutlined, EllipsisOutlined } from '@ant-design/icons';
import {
  AnswerCommentItemContainer,
  AnswerCommentItemTop,
  AnswerCommentItemBottom,
  Left,
  Right,
  EditBtn,
} from './AnswerCommentItem.style';

import PropTypes from 'prop-types';

const AnswerCommentItem = ({ comment }) => {
  const [moreBtn, setMoreBtn] = useState(true);
  return (
    <AnswerCommentItemContainer>
      <AnswerCommentItemTop>
        <Left>
          <SwapRightOutlined
            style={{ fontSize: '24px', color: '#999', marginRight: '20px' }}
          />
          <CommentMemberProfile />
          <p>
            {comment.insertDate
              .substring(0, 10)
              .replace('-', '.')
              .replace('-', '.')}
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
      </AnswerCommentItemTop>
      <AnswerCommentItemBottom>
        <span className="CommentsContent">{comment.comment}</span>
      </AnswerCommentItemBottom>
    </AnswerCommentItemContainer>
  );
};

AnswerCommentItem.propTypes = {
  comment: PropTypes.shape({
    insertDate: PropTypes.string,
    comment: PropTypes.string,
    role: PropTypes.string,
    parentNo: PropTypes.string,
  }),
};

export default AnswerCommentItem;
