import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { style } from './LoginModal.style';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import { UserAuth } from '../../../../context/Auth.context';

const LoginModal = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

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
            onClick={handleGoogleSignIn}
            type="primary"
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
