import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../../ui/button/Button.component';
import { useNavigate, Link } from 'react-router-dom';
// <<<<<<< HEAD
// import { Nav, NavContainer, Left, Right } from './Navbar.style';
// import { Button, Avatar, Menu, Dropdown } from 'antd';
// =======
import { Nav, NavContainer, Left, Right } from './Navbar.style';
import { Avatar, Menu, Dropdown } from 'antd';
// >>>>>>> b57bb93dd0969b1087da83d635406e2685c27322
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
        <Left>
          <Link to="/">
            <span>ooLa</span>
          </Link>
        </Left>
        <Right>
          {authenticate ? (
            <>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.filled}
                onClick={createStudy}
              >
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
        </Right>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
