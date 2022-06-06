import styled from 'styled-components';

const Nav = styled.div`
  height: 65px;
  min-width: 1100px;
  background-color: #fff;
`;

const NavContainer = styled.div`
  padding: 0 200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLeft = styled.div`
  a {
    font-weight: bold;
    font-size: 3.5rem;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;

  .ant-avatar,
  .like-btn {
    margin-left: 8px;
  }

  .like-btn {
    font-size: 30px;
    width: 40px;
    height: 40px;
    color: #f56a00;
    padding-top: 4px;
  }

  .user-btn {
    cursor: pointer;
  }
`;

export const style = {
  Nav,
  NavContainer,
  NavLeft,
  NavRight,
};
