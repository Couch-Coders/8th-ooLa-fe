import React, { useState } from 'react';
import { style } from './LoginModal.style';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';

const LoginModal = ({ setAuthenticate }) => {
  const loginUser = () => {
    setAuthenticate(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        로그인
      </Button>
      <Modal
        title={null}
        visible={isModalVisible}
        centered
        footer={null}
        closable={false}
        width={500}
      >
        <ModalContent>
          <h2>로그인</h2>
          <h3>ooLa와 함께 스터디를 시작해요</h3>
          <Button
            type="primary"
            onClick={loginUser}
            style={{ width: 300, height: 50 }}
          >
            구글 로그인
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;

const { ModalContent } = style;
