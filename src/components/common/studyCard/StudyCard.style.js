import styled from 'styled-components';
import { TeamOutlined } from '@ant-design/icons';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  border-radius: 1.6rem;
  transition: 0.3s;
  padding: 0;
  &:hover {
    transform: translateY(-5px);
    border: 1px solid #cdf0ff;
  }
`;

export const StudyCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

export const TagContainer = styled.div`
  margin-bottom: 10rem;
`;

export const StudyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;

export const ConditionContaier = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 0.8em;
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  line-height: 2.2rem;
`;

export const TeamOutlinedIcon = styled(TeamOutlined)`
  font-size: 2rem;
`;
