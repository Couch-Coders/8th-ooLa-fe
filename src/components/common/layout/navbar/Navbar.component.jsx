import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { style } from './Navbar.style';
import { Button, Avatar, Menu, Dropdown } from 'antd';
import { HeartFilled, UserOutlined } from '@ant-design/icons';

import LoginModal from '../loginModal/LoginModal.component';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const myProfile = () => {
    setAuthenticate(true);
    navigate('/myProfile');
  };

  const myStudy = () => {
    setAuthenticate(true);
    navigate('/myStudy');
  };

  const createStudy = () => {
    setAuthenticate(true);
    navigate('/createStudy');
  };

  const logout = () => {
    setAuthenticate(false);
    navigate('/');
  };

  const menu = (
    <Menu
      items={[
        {
          label: <myProfile onClick={myProfile}>마이프로필</myProfile>,
        },
        {
          label: <myStudy onClick={myStudy}>마이스터디</myStudy>,
        },
        {
          label: <logout onClick={logout}>로그아웃</logout>,
        },
      ]}
    />
  );

  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <Link to="/">
            <span>ooLa</span>
          </Link>
        </NavLeft>
        <NavRight>
          {authenticate ? (
            <>
              <Button type="primary" onClick={createStudy}>
                스터디 만들기
              </Button>
              <HeartFilled className="like-btn" onClick={myStudy} />
              <Dropdown overlay={menu} placement="bottomLeft">
                <Avatar
                  className="user-btn"
                  size="large"
                  icon={<UserOutlined />}
                />
              </Dropdown>
            </>
          ) : (
            <LoginModal setAuthenticate={setAuthenticate} />
          )}
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

const { Nav, NavContainer, NavLeft, NavRight } = style;
