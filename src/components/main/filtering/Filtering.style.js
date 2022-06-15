import styled from 'styled-components';
import { PageWrapper } from '../../../styles/container.style';

const FilteringContainer = styled.div`
  height: 30rem;
  width: 100%;
  background-color: #cdf0ff;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;

const FilteringBanner = styled(PageWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 5rem;
    color: #333333;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  .ant-select {
    margin-right: 2rem;
  }
  Button {
    width: 8rem;
    height: 4rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const style = {
  FilteringContainer,
  FilteringBanner,
  SelectContainer,
};
