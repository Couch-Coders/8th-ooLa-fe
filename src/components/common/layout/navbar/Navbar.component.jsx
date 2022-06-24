import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/Auth.context';
import Button, { BUTTON_TYPE_CLASSES } from '../../ui/button/Button.component';
import { useNavigate, Link } from 'react-router-dom';
import { Avatar, Menu, Dropdown } from 'antd';
import { Nav, NavContainer, Left, Right } from './Navbar.style';
import { HeartFilled, UserOutlined } from '@ant-design/icons';
import LoginModal from '../loginModal/LoginModal.component';

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutHandler, user } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await logoutHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const myStudy = () => {
    navigate('/myStudy/like');
  };

  const createStudy = () => {
    navigate('/createStudy');
  };

  const menu = (
    <Menu
      items={[
        {
          label: <Link to="/myProfile/update">마이프로필</Link>,
        },
        {
          label: <Link to="/myStudy/default">마이스터디</Link>,
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
        <Left>
          <Link to="/">
            <span>ooLa</span>
          </Link>
        </Left>
        <Right>
          {user ? (
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
            <LoginModal />
          )}
        </Right>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
