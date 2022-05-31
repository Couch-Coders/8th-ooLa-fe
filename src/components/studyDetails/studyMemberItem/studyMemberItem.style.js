import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  position: relative;
`;

export const LeaderMark = styled.div`
position: absolute;
background: #3398d9;
z-index: 10;
border-top-left-radius: 2px;
border-bottom-left-radius: 2px;
font-size: 15px;
line-height: 32px;
font-weight: bold;
text-align: center;
color: #fff;
text-shadow: 0 1px 1px rgba(0,0,0,0.2);
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);
box-shadow: 0 1px 1px rgba(0,0,0,0.2);
top: 8%;
right: -3%;
min-width: 28%;
max-width: 28%;
height: 32px;
  &::after {
    content: "";
    border-color: transparent #1e5b82;
    position: absolute;
    z-index: -20;
    top: 100%;
    left: auto;
    border-style: solid;
    border-width: 0 0 10px 10px;
    right: 0;
  }
}
`;

export const TechsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
