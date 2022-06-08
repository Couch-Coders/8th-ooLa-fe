import styled from 'styled-components';
import { PageWrapper } from '../../../../styles/container.style';

export const Nav = styled.div`
  height: 8.5rem;
  background-color: #fff;
`;
export const NavContainer = styled(PageWrapper)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  a {
    font-weight: 800;
    font-size: 4.6rem;
    color: #333333;
    &:hover {
      color: #0fb2f2;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  .ant-btn {
    height: 3.8rem;
    margin-right: 0.4rem;
    background-color: #0fb2f2;
    border-color: #0fb2f2;
  }

  .ant-avatar,
  .like-btn {
    margin-left: 1rem;
  }

  .like-btn {
    font-size: 3.6rem;
    width: 4.6rem;
    height: 4.6rem;
    color: #f56a00;
    padding-top: 0.4rem;
  }

  .user-btn {
    cursor: pointer;
  }
`;
