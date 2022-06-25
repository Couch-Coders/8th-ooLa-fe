import React, { useState, useContext } from 'react';
import { Avatar } from 'antd';
import LeaderTag from '../leaderTag/LeaderTag.component';
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
  InputField,
  StyledButton,
} from './CommentItem.style';
import { deleteComments, updateComments } from '../../../lib/apis/comments';
import PropTypes from 'prop-types';
import { auth } from '../../../service/firebase';
import { Popconfirm } from 'antd';

import { useParams } from 'react-router-dom';

const CommentItem = ({ comment, setIsComment, leader }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  const { content, createdDate, member, id } = comment;
  const commentId = id;
  const [moreBtn, setMoreBtn] = useState(true);
  const { studyId } = useParams();

  const writerUid = member.uid;
  const currentUserUid = auth.currentUser?.uid;

  const submitDeleteComment = async event => {
    event.preventDefault();
    const res = await deleteComments(commentId);
    if (res.status === 200) {
      setIsComment(true);
    }
  };

  const editHandler = () => setIsEditActive(true);

  const [fetchComment, setFetchComment] = useState(content);

  const commentChangeHandler = event => {
    setFetchComment(event.target.value);
  };

  const updateHandler = async event => {
    event.preventDefault();

    const updateComment = {
      commentId: commentId,
      content: fetchComment,
      createdDate: createdDate,
      studyId: studyId,
      uid: member.uid,
    };
    console.log(updateComment);

    const res = await updateComments(updateComment, commentId, studyId);
    if (res.status === 200) {
      setIsComment(true);
      setIsEditActive(false);
    }
  };

  return (
    <CommentItemContainer onSubmit={updateHandler}>
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

        {writerUid === currentUserUid ? (
          <Right>
            {moreBtn ? (
              <EllipsisOutlined
                onClick={() => setMoreBtn(false)}
                style={{ fontSize: '30px', color: '#999', marginRight: '20px' }}
              />
            ) : (
              <EditBtn>
                <button onClick={editHandler}>수정</button>
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
        {!isEditActive ? (
          <p className="CommentsContent">{content}</p>
        ) : (
          <InputField>
            <textarea
              size="large"
              rows={4}
              placeholder="댓글을 입력해주세요"
              value={fetchComment}
              onChange={commentChangeHandler}
            />
            <StyledButton
              type="submit"
              style={{ width: 110, height: 38 }}
              onClick={updateHandler}
            >
              완료
            </StyledButton>
          </InputField>
        )}
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
