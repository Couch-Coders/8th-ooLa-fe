import styled from 'styled-components';
import { Avatar } from 'antd';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  width: 15%;
`;

export const Nickname = styled.span`
  margin: 0 1rem 0 1.2rem;
  font-size: 1.4rem;
`;

export const LeaderTagContainer = styled.span``;

export const StyledAvatar = styled(Avatar)`
  margin-bottom: 1rem;
`;
