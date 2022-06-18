import React, { useState } from 'react';
import CommentMemberProfile from '../commentMemberProfile/CommentMemberProfile.component';
import { SwapRightOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {
  QuestionCommentItemContainer,
  QuestionCommentItemTop,
  QuestionCommentItemBottom,
  Left,
  Right,
  EditBtn,
} from './QuestionCommentItem.style';

import PropTypes from 'prop-types';

const QuestionCommentItem = ({ comment }) => {
  const [moreBtn, setMoreBtn] = useState(true);

  return (
    <QuestionCommentItemContainer>
      <QuestionCommentItemTop>
        <Left>
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
      </QuestionCommentItemTop>
      <QuestionCommentItemBottom>
        <p className="CommentsContent">{comment.comment}</p>
        <Button type="submit" style={{ width: 120, height: 38 }}>
          답글
        </Button>
      </QuestionCommentItemBottom>
    </QuestionCommentItemContainer>
  );
};

QuestionCommentItem.propTypes = {
  comment: PropTypes.shape({
    insertDate: PropTypes.string,
    comment: PropTypes.string,
    role: PropTypes.string,
    parentNo: PropTypes.string,
  }),
};

export default QuestionCommentItem;
