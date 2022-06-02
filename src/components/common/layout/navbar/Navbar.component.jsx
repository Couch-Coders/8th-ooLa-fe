import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { style } from './Navbar.style';
import 'antd/dist/antd.css';
import { Button, Avatar, Menu, Dropdown } from 'antd';
import { HeartFilled, UserOutlined } from '@ant-design/icons';
import LoginModal from '../loginModal/LoginModal.component';
import { UserAuth } from '../../../../context/Auth.context';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const myStudy = () => {
    navigate('/myStudy');
  };

  const createStudy = () => {
    navigate('/createStudy');
  };

  const menu = (
    <Menu
      items={[
        {
          label: <Link to="/myProfile">마이프로필</Link>,
        },
        {
          label: <Link to="/myStudy">마이스터디</Link>,
        },
        {
          label: (
            <Link to="/" onClick={handleSignOut}>
              로그아웃
            </Link>
          ),
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
          {user ? (
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
            <LoginModal />
          )}
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

const { Nav, NavContainer, NavLeft, NavRight } = style;
