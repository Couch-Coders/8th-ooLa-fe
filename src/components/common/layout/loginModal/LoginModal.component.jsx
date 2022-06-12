import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import { style } from './LoginModal.style';
import { Button, Modal } from 'antd';
import { googleSignIn } from '../../../../service/firebase';
import { login } from '../../../../lib/apis/auth';

const LoginModal = () => {
  const { loginHandler, logoutHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      const res = await login();
      if (res.status === 200) {
        loginHandler();
        setIsModalVisible(false);
      }
    } catch (err) {
      console.log(err);
      if (err.statusCode === 404) {
        setIsModalVisible(false);
        navigate('/myProfile');
      }
    }
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
            onClick={handleGoogleSignIn}
            type="primary"
            style={{ width: 300, height: 50 }}
          >
            구글 로그인
          </Button>
          <button onClick={() => logoutHandler()}>로그아웃</button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;

const { ModalContent } = style;
