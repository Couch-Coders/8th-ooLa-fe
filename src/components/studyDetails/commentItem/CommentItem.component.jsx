import React, { useState, useContext } from 'react';
import { Avatar } from 'antd';
import LeaderTag from '../leaderTag/LeaderTag.component';
import { StudyDetailsContext } from '../../../context/studyDetails.context';
import { SwapRightOutlined, EllipsisOutlined } from '@ant-design/icons';
import {
  CommentItemContainer,
  CommentItemTop,
  CommentItemBottom,
  Left,
  Right,
  ProfileContainer,
  Nickname,
  EditBtn,
} from './CommentItem.style';
import { deleteComments } from '../../../lib/apis/comments';
import PropTypes from 'prop-types';
import { auth } from '../../../service/firebase';
import { Popconfirm } from 'antd';

const CommentItem = ({ comment, setIsComment, leader }) => {
  const { content, createdDate, member, id } = comment;
  const commentId = id;
  const [moreBtn, setMoreBtn] = useState(true);

  const writerUid = member.uid;
  const uid = auth.currentUser?.uid;

  const submitDeleteComment = async event => {
    event.preventDefault();
    const res = await deleteComments(commentId);
    if (res.status === 200) {
      setIsComment(true);
    }
  };
  return (
    <CommentItemContainer>
      <CommentItemTop>
        <Left>
          <ProfileContainer>
            <Avatar size={45} src={member.photoUrl} />
            <Nickname>{member.nickName}</Nickname>
            {comment.member.uid === leader.uid ? <LeaderTag /> : null}
          </ProfileContainer>
          <p>
            {createdDate.substring(0, 10).replace('-', '.').replace('-', '.')}
          </p>
        </Left>

        {writerUid === uid ? (
          <Right>
            {moreBtn ? (
              <EllipsisOutlined
                onClick={() => setMoreBtn(false)}
                style={{ fontSize: '30px', color: '#999', marginRight: '20px' }}
              />
            ) : (
              <EditBtn>
                <button>수정</button>
                <Popconfirm
                  title="댓글을 삭제하시겠습니까?"
                  onConfirm={submitDeleteComment}
                  okText="삭제"
                  cancelText="취소"
                >
                  <button>삭제</button>
                </Popconfirm>
                <button onClick={() => setMoreBtn(true)}>
                  <SwapRightOutlined
                    style={{ fontSize: '18px', color: '#666' }}
                  />
                </button>
              </EditBtn>
            )}
          </Right>
        ) : null}
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
