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

const QuestionCommentItem = () => {
  const [moreBtn, setMoreBtn] = useState(true);

  return (
    <QuestionCommentItemContainer>
      <QuestionCommentItemTop>
        <Left>
          <CommentMemberProfile />
<<<<<<< HEAD
          <span>2022.06.03</span>
=======
          <p>2022.06.03</p>
>>>>>>> feature/style
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
<<<<<<< HEAD
        <span className="CommentsContent">스터디 참여 조건이 있나요?</span>
        <Button type="submit" style={{ width: 120, height: 40 }}>
=======
        <p className="CommentsContent">스터디 참여 조건이 있나요?</p>
        <Button type="submit" style={{ width: 120, height: 38 }}>
>>>>>>> feature/style
          답글
        </Button>
      </QuestionCommentItemBottom>
    </QuestionCommentItemContainer>
  );
};

QuestionCommentItem.propTypes = {
  insertDate: PropTypes.string,
  comment: PropTypes.string,
  studyMembersRole: PropTypes.string,
  parentNo: PropTypes.string,
};

export default QuestionCommentItem;
