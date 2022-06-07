import styled from 'styled-components';
import { PageWrapper } from '../../../../styles/container.style';

const Nav = styled.div`
  height: 65px;
  width: 100%;
  background-color: #fff;
`;

const NavContainer = styled(PageWrapper)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLeft = styled.div`
  a {
    font-weight: bold;
    font-size: 3.5rem;
    color: #333333;
    &:hover {
      color: #0fb2f2;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;

  .ant-btn {
    background-color: #0fb2f2;
    border-color: #0fb2f2;
  }

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
