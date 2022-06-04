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

const AnswerCommentItem = () => {
  const [moreBtn, setMoreBtn] = useState(true);
  return (
    <AnswerCommentItemContainer>
      <AnswerCommentItemTop>
        <Left>
          <SwapRightOutlined
            style={{ fontSize: '24px', color: '#999', marginRight: '20px' }}
          />
          <CommentMemberProfile />
          <span>2022.06.04</span>
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
        <span className="CommentsContent">
          기간 동안 함께 공부할 의지만 있으시다면 모두 참여 가능하세요
        </span>
      </AnswerCommentItemBottom>
    </AnswerCommentItemContainer>
  );
};

AnswerCommentItem.propTypes = {
  date: PropTypes.string,
  comment: PropTypes.string,
  studyMembersRole: PropTypes.string,
  parentNo: PropTypes.string,
};

export default AnswerCommentItem;
